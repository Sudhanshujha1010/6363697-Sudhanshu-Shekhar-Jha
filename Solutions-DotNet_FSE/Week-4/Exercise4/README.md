# CRUD Operations (Update Operation)

## Objectives
Demonstrate creation of an Action method to perform data update operations in ASP.NET Core Web API.
---
## Implementation
### DTO: `EmployeeDto`
```csharp
public class EmployeeDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int Salary { get; set; }
}
```
### Service: `InMemoryEmployeeService`
A service layer that holds hardcoded `List<EmployeeDto>` and supports:
- `GetAll()`
- `GetById(int id)`
- `Update(EmployeeDto emp)`

### Endpoints in `EmployeeController`
- **GET `/api/employee`**
Returns a list of all employees.
- **PUT `/api/employee`**
Updates an existing employee using `[FromBody]`.
```json
{
  "id": 2,
  "name": "Joseph",
  "salary": 75000
}
```
**Validation:**
- ID <= 0 : `400 BadRequest: Invalid employee id`
- ID not found in hardcoded list : `400 BadRequest: Invalid employee id`
- Otherwise : `200 OK`
---
## Testing
### Swagger
- Run the app: `dotnet run`
- Navigate to: `http://localhost:<port>/swagger`
- Use the **PUT** endpoint to test update

### Postman
- Set method to **PUT**
- URL: `http://localhost:<port>/api/employee`
- Set Headers: `Content-Type: application/json`
- JSON Body:
    ```json
    {
        "id": 2,
        "name": "Joseph",
        "salary": 75000 
    }
    ```
---
## Run Instructions
```bash
dotnet restore
dotnet build
dotnet run
```