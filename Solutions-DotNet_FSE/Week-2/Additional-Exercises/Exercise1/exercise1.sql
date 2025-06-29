-- Exercise 1: Creating a Non-Clustered Index
-- Goal: Create a non-clustered index on the ProductName column in the Products table and compare query execution time before and after index creation.

-- Step 1: Query to fetch product details before index creation
SELECT * FROM Products WHERE ProductName = 'Laptop';

-- Step 2: Create a non-clustered index on ProductName
-- DROP INDEX IDX_ProductName ON Products;
CREATE NONCLUSTERED INDEX IDX_ProductName on Products(ProductName);

-- Step 3: Query to fetch product details after index creation
SELECT * FROM Products WHERE ProductName = 'Laptop';

-- Exercise 2: Creating a Clustered Index
-- Goal: Create a clustered index on the OrderDate column in the Orders table and compare query execution time before and after index creation.

-- Step 1: Query to fetch orders before index creation
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';

-- Step 2: Create a clustered index on OrderDate
-- ALTER TABLE OrderDetails DROP CONSTRAINT FK__OrderDeta__Order__2C538F61;
-- ALTER TABLE Orders DROP CONSTRAINT PK__Orders__C3905BAFAA6ECA37;
-- DROP INDEX IDX_Orders_OrderDate ON Orders;
CREATE CLUSTERED INDEX IDX_Orders_OrderDate ON Orders(OrderDate);

-- Step 3: Query to fetch orders after index creation
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';

-- Exercise 3: Creating a Composite Index
-- Goal: Create a composite index on the CustomerID and OrderDate columns in the Orders table and compare query execution time before and after index creation.

-- Step 1: Query to fetch orders before index creation
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';

-- Step 2: Create a composite index on CustomerID and OrderDate
-- DROP INDEX IDX_CustomerID_OrderDate ON Orders;
CREATE NONCLUSTERED INDEX IDX_CustomerID_OrderDate ON Orders(CustomerID, OrderDate);

-- Step 3: Query to fetch orders after index creation
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';
