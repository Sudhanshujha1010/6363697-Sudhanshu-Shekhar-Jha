# Ranking and Window Functions

## Objective
Use SQL **ranking and window functions** to find the **top 3 most expensive products** in each category using:

- `ROW_NUMBER()`
- `RANK()`
- `DENSE_RANK()`
- `OVER()`
- `PARTITION BY`

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

## Exercise
### Exercise 1: Using ROW_NUMBER()
```sql
SELECT * FROM (
    SELECT 
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price) AS RowNum
    FROM Products
) AS RankedProducts
WHERE RowNum <= 3;
```
- **Returns exactly 3 products per category.**
- **Even if prices are the same, each row gets a unique number.**


### Exercise 2: Using RANK()
```sql
SELECT * FROM (
    SELECT 
        ProductID,
        ProductName,
        Category,
        Price,
        RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
    FROM Products
) AS Ranked
WHERE RowNum <= 3;
```
- **Handles ties by skipping ranks.**
- **If two products share rank 1, the next product will be ranked 3.**

### Exercise 3: DENSE_RANK()
```sql
SELECT * FROM (
    SELECT 
        ProductID,
        ProductName,
        Category,
        Price,
        DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
    FROM Products
) AS RankedProd
WHERE RowNum <= 3;
```
- **Handles ties like RANK() but does not skip ranks.**
- **If two products are tied at rank 1, the next is rank 2.**
---
## Summary of Differences Between Ranking Functions

| Function       | Ties Handling          | Rank Skipping | Use Case                                 |
|----------------|------------------------|----------------|-------------------------------------------|
| `ROW_NUMBER()` | Each row gets a number | No         | Get exact top N per group                 |
| `RANK()`       | Same rank for ties    | Yes        | When ranking needs to reflect ties        |
| `DENSE_RANK()` | Same rank for ties    | No         | Rank with no gaps in tied values          |
