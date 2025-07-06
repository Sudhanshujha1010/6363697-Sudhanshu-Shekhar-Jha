using exercise4.Dtos;

namespace exercise4.Services
{
    public class InMemoryEmployeeService : IEmployeeService
    {
        private readonly List<EmployeeDto> _employees;

        public InMemoryEmployeeService()
        {
            _employees = new List<EmployeeDto>
            {
                new EmployeeDto { Id = 1, Name = "Alice", Salary = 50000 },
                new EmployeeDto { Id = 2, Name = "Bob", Salary = 60000 }
            };
        }

        public List<EmployeeDto> GetAll() => _employees;

        public EmployeeDto? GetById(int id) =>
            _employees.FirstOrDefault(e => e.Id == id);

        public EmployeeDto? Update(EmployeeDto updatedEmployee)
        {
            var existing = _employees.FirstOrDefault(e => e.Id == updatedEmployee.Id);
            if (existing != null)
            {
                existing.Name = updatedEmployee.Name;
                existing.Salary = updatedEmployee.Salary;
            }
            return existing;
        }
    }
}