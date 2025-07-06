# Retrieving Data from the Database
## Objective

Learn how to:
- Retrieve all products from the database
- Find a product using its primary key (ID)
- Find the first product that matches a specific condition
---

## Prerequisites

Ensure you have:
- [.NET 6+ SDK](https://dotnet.microsoft.com/en-us/download)
- Entity Framework Core
- SQL Server
- LINQ
- Async/Await
---

## Models Used

### Category.cs

```csharp
public class Category
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public ICollection<Product>? Products { get; set; }
}
```

### Product.cs

```csharp
public class Product
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public decimal Price { get; set; }
    public int CategoryId { get; set; }
    public Category? Category { get; set; }
}
```
---
## Steps
### Retrieve All Products

Use `ToListAsync()` to fetch all product records.
```csharp
var products = await context.Products.ToListAsync();
foreach (var p in products)
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
```

###  Find Product by ID

Use `FindAsync()` to retrieve a product using its primary key.


```csharp
var product = await context.Products.FindAsync(1);
Console.WriteLine($"Found: {product?.Name}");
```

### FirstOrDefault with Condition

Use `FirstOrDefaultAsync()` to get the first product with price greater than ₹50,000.
```csharp
var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
Console.WriteLine($"Expensive: {expensive?.Name}");
```


---
## NOTES

- Ensure the *database* is *seeded with initial data*.
- Make sure your connection string is configured correctly in `appsettings.json`.
- You must run `dotnet ef database update` before executing this lab if migrations haven’t been applied.