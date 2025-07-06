using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace exercise5.Controllers
{
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
}