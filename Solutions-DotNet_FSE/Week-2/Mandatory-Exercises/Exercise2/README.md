# Stored Procedure Creation

## Objective
This assignment demonstrates the creation and execution of a SQL stored procedure to insert employee records into the Employees table based on parameters provided at runtime.

Stored procedures help in:

- `Reusability of SQL logic`
- `Improved Performance via Precompiled Execution`
- `Secured and controlled data access`
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

## Sample Data
```sql
INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'Human Resources'),
(2, 'Engineering'),
(3, 'Sales'),
(4, 'Marketing');

INSERT INTO Employees (EmployeeID, FirstName, LastName, DepartmentID, Salary, JoinDate) VALUES
(101, 'Alice', 'Johnson', 1, 50000.00, '2020-01-10'),
(102, 'Bob', 'Smith', 2, 75000.00, '2019-03-15'),
(103, 'Charlie', 'Brown', 2, 80000.00, '2021-07-20'),
(104, 'David', 'Lee', 3, 60000.00, '2018-05-30'),
(105, 'Eve', 'Williams', 4, 65000.00, '2022-11-01');
```

## Exercise: Stored Procedure Creation
### Step 1: Create the Stored Procedure
```sql
CREATE PROCEDURE sp_InsertEmployee 
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @DepartmentID INT,
    @Salary DECIMAL(10, 2),
    @JoinDate DATE
AS
BEGIN
    INSERT INTO Employees
        (FirstName, LastName, DepartmentID, Salary, JoinDate)
    VALUES (@FirstName, @LastName, @DepartmentID, @Salary, @JoinDate);
END;
GO
```
### Step 2: Execute the Procedure
```sql
EXEC sp_InsertEmployee 
    @FirstName = 'Rony',
    @LastName = 'Gasper',
    @DepartmentID = 2,
    @Salary = 55000.00,
    @JoinDate = '2023-06-01';
```
### Step 3: Verify the Insertion
```sql
SELECT * FROM Employees 
WHERE FirstName = 'Rony' AND LastName = 'Gasper';
```