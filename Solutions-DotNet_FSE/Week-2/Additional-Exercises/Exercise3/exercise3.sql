CREATE PROCEDURE p_GetEmployeeCountByDept @DeptID INT
AS
BEGIN
    SELECT *
    FROM Employees
    WHERE DepartmentID = @DeptID
END;
GO
EXEC p_GetEmployeeCountByDept @DeptID = 1;