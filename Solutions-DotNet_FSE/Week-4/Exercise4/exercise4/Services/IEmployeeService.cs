using exercise4.Dtos;

namespace exercise4.Services
{
    public interface IEmployeeService
    {
        List<EmployeeDto> GetAll();
        EmployeeDto? GetById(int id);
        EmployeeDto? Update(EmployeeDto updatedEmployee);
    }
}