# JWT Authentication & Role-based Authorization in ASP.NET Core Web API
## Objectives
This assignment demonstrates:
- Enabling CORS for API access
- Implementing JSON Web Token (JWT) based authentication
- Creating secure endpoints with `[Authorize]`
- Adding role-based access control using JWT claims
- Testing token expiry and invalid tokens using Postman
- Swagger and token-less public controller support with `[AllowAnonymous]`
---
## Technologies Used
- ASP.NET Core Web API `(.NET 6+)`
- JWT Authentication `(System.IdentityModel.Tokens.Jwt)`
- CORS configuration
- Postman for testing
- Swagger UI for documentation
---
## Setup Instructions
### Enable CORS
CORS (Cross-Origin Resource Sharing) allows APIs to be called from other domains
`Startup.cs`
```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

app.UseCors("AllowAll");
```
> CORS enables your frontend apps (like React or Angular) to access the Web API.

### JWT Authentication
Install required packages:
```bash
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
```
In `startup.cs`:
```csharp
var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("SECRET_SECURITY_KEY"));

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = "mySystem",
        ValidAudience = "myUsers",
        IssuerSigningKey = securityKey
    };
});
```
In the middleware pipeline:
```csharp
app.UseAuthentication();
app.UseAuthorization();
```

### JWT Token Generation via `AuthController`
```csharp
[AllowAnonymous]
[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    [HttpGet("token")]
    public IActionResult GetToken()
    {
        var token = GenerateJSONWebToken(101, "Admin");
        return Ok(token);
    }

    private string GenerateJSONWebToken(int userId, string userRole)
    {
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("SECRET_SECURITY_KEY"));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Role, userRole),
            new Claim("UserId", userId.ToString())
        };

        var token = new JwtSecurityToken(
            issuer: "mySystem",
            audience: "myUsers",
            claims: claims,
            expires: DateTime.Now.AddMinutes(2),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
```
### Secure Endpoints with `[Authorize]`
```csharp
[ApiController]
[Route("api/[controller]")]
[Authorize(Roles = "Admin,POC")]
public class EmployeeController : ControllerBase
{
    [HttpGet("data")]
    public IActionResult GetEmployeeData()
    {
        return Ok("Secure Employee Data Returned.");
    }
}
```
> If token is missing or expired → Returns `401 Unauthorized`
---
## Testing in Postman
- **GET** `api/auth/token` : Copy the JWT
- Set Header in Postman:
    ```makefile
        Key: Authorization
        Value: Bearer <token>
    ```
- Hit `api/employee` : You should receive `200 OK` if the token is valid.
- Modify/Remove Token : You'll get `401 Unauthorized`.