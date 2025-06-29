# Stored Procedure
## Objective
This assignment demonstrates how to create and use a stored procedure in SQL Server to return the total number of employees in a given department.
---
## Database Schema Overview

```sql
CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10, 2),
    JoinDate DATE,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);
```
---
## Sample Data
```sql
INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'HR'),
(2, 'Finance'),
(3, 'IT'),
(4, 'Marketing');

INSERT INTO Employees (EmployeeID, FirstName, LastName, DepartmentID, Salary, JoinDate) VALUES
(1, 'John', 'Doe', 1, 5000.00, '2020-01-15'),
(2, 'Jane', 'Smith', 2, 6000.00, '2019-03-22'),
(3, 'Michael', 'Johnson', 3, 7000.00, '2018-07-30'),
(4, 'Emily', 'Davis', 4, 5500.00, '2021-11-05');
```
---
## Exercise
### Stored Procedure Creation
*Goal:* Create a procedure to return the total number of employees in a department.
```sql
CREATE PROCEDURE sp_GetEmployeeCountByDept
    @DeptID INT
AS
BEGIN
    SELECT COUNT(*) AS EmployeeCount
    FROM Employees
    WHERE DepartmentID = @DeptID
END;
```

### Executing the Procedure
```sql
EXEC sp_GetEmployeeCountByDept @DeptID = 1;
```
---
## Summary of Indexes

| Object Type             | Name   | Purpose              
|--------------------|------------|----------------------------|
| Scalar Procedure     | sp_GetEmployeeCountByDept   | Returns the number of employees in a department                |
| Input Parameter          |@DeptID (INT)     | Department identifier                 |
| Return Type   | INT     | Total number of employees      | 