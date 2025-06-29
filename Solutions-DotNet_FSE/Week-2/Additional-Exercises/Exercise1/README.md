# Creating Non-Clustered, Clustered, and Composite Indexes

## Objective
This additional assignment demonstrates how to **optimize query performance** by applying:

- Non-Clustered Index
- Clustered Index
- Composite Index

using an **E-Commerce Database Schema**.
---
## Database Schema Overview

```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Region VARCHAR(50)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
```
---
## Sample Data
```sql
INSERT INTO Customers (CustomerID, Name, Region) VALUES
(1, 'Alice', 'North'),
(2, 'Bob', 'South'),
(3, 'Charlie', 'East'),
(4, 'David', 'West');

INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Tablet', 'Electronics', 600.00),
(4, 'Headphones', 'Accessories', 150.00);

INSERT INTO Orders (OrderID, CustomerID, OrderDate) VALUES
(1, 1, '2023-01-15'),
(2, 2, '2023-02-20'),
(3, 3, '2023-03-25'),
(4, 4, '2023-04-30');

INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quantity) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 1),
(4, 4, 4, 3);
```
---
## Indexing Exercise
### Exercise 1: Non-Clustered Index
*Goal:* Improve search performance on ProductName column.
```sql
-- Step 1: Query to fetch product details before index creation
SELECT * FROM Products WHERE ProductName = 'Laptop';

-- Step 2: Create a non-clustered index on ProductName
-- DROP INDEX IDX_ProductName ON Products;
CREATE NONCLUSTERED INDEX IDX_ProductName on Products(ProductName);

-- Step 3: Query to fetch product details after index creation
SELECT * FROM Products WHERE ProductName = 'Laptop';
```

### Exercise 2: Clustered Index
*Goal:*  Improve search speed for OrderDate in the Orders table.
> **Note:** Only one clustered index can exist per table.  
> If a clustered index (often the primary key) already exists, it must be dropped or replaced before creating a new one.
```sql
-- Step 1: Query to fetch orders before index creation
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';

-- Step 2: Create a clustered index on OrderDate
-- ALTER TABLE OrderDetails DROP CONSTRAINT FK__OrderDeta__Order__2C538F61;
-- ALTER TABLE Orders DROP CONSTRAINT PK__Orders__C3905BAFAA6ECA37;
-- DROP INDEX IDX_Orders_OrderDate ON Orders;
CREATE CLUSTERED INDEX IDX_Orders_OrderDate ON Orders(OrderDate);

-- Step 3: Query to fetch orders after index creation
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';
```

### Exercise 1: Composite Index
*Goal:* Optimize combined filtering using CustomerID and OrderDate.
```sql
-- Step 1: Query to fetch orders before index creation
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';

-- Step 2: Create a composite index on CustomerID and OrderDate
-- DROP INDEX IDX_CustomerID_OrderDate ON Orders;
CREATE NONCLUSTERED INDEX IDX_CustomerID_OrderDate ON Orders(CustomerID, OrderDate);

-- Step 3: Query to fetch orders after index creation
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';
```
---
## Summary of Indexes

| Type             | Table   | Column(s)               | Index Name               |
|--------------------|------------|----------------------------|-----------------------------|
| Non-Clustered      | Products   | ProductName                | IDX_ProductName             |
| Clustered          | Orders     | OrderDate                  | IDX_Orders_OrderDate        |
| Composite Index    | Orders     | CustomerID, OrderDate      | IDX_CustomerID_OrderDate    |
---