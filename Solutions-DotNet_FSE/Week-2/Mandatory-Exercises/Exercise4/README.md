# NUnit Testing
## Objective

This exercise demonstrates how to write *NUnit-based* unit tests for a calculator class implementing basic arithmetic operations: *Addition, Subtraction, Multiplication, Division, and state management* (`AllClear`).
---
## Testing Setup

- Framework: `.NET`
- Test Framework: `NUnit`
- Test Runner: `Microsoft.NET.Test.Sdk` + `NUnit3TestAdapter`
---
## Test Class Implementation
```csharp
namespace CalcLibraryTests
{
    [TestFixture]
    public class CalculatorTests
    {
        private SimpleCalculator calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new SimpleCalculator();
        }

        [Test]
        [TestCase(2, 3, 5)]
        [TestCase(-1, 1, 0)]
        [TestCase(0, 0, 0)]
        public void Addition_ReturnsCorrectResult(double a, double b, double expected)
        {
            var result = calculator.Addition(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(5, 3, 2)]
        [TestCase(0, 5, -5)]
        [TestCase(-1, -1, 0)]
        public void Subtraction_ReturnsCorrectResult(double a, double b, double expected)
        {
            var result = calculator.Subtraction(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(4, 5, 20)]
        [TestCase(-3, 2, -6)]
        [TestCase(0, 10, 0)]
        public void Multiplication_ReturnsCorrectResult(double a, double b, double expected)
        {
            var result = calculator.Multiplication(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        [TestCase(10, 2, 5)]
        [TestCase(-8, 2, -4)]
        [TestCase(5, -1, -5)]
        public void Division_ReturnsCorrectResult(double a, double b, double expected)
        {
            var result = calculator.Division(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        public void Division_ByZero_ThrowsArgumentException()
        {
            var ex = Assert.Throws<ArgumentException>(() => calculator.Division(10, 0));
            Assert.That(ex.Message, Is.EqualTo("Second Parameter Can't be Zero"));
        }

        [Test]
        public void AllClear_ResetsResultToZero()
        {
            calculator.Addition(10, 5);
            calculator.AllClear();
            Assert.That(calculator.GetResult, Is.EqualTo(0));
        }
    }
}
```
---
## Test Coverage
| Method                 | Description                                   | Test Cases              |
| ---------------------- | --------------------------------------------- | ----------------------- |
| `Addition()`           | Verifies addition of two numbers              | `(2, 3, 5)`, `(-1,1,0)` |
| `Subtraction()`        | Verifies subtraction logic                    | `(5,3,2)`, `(-1,-1,0)`  |
| `Multiplication()`     | Verifies multiplication                       | `(4,5,20)`, `(0,10,0)`  |
| `Division()`           | Tests valid division results                  | `(10,2,5)`, `(5,-1,-5)` |
| `Division()` (by zero) | Ensures `ArgumentException` on divide-by-zero | `(10,0)`                |
| `AllClear()`           | Checks if calculator resets result to zero    | After `Addition`        |
---
## Summary
| Attribute       | Purpose                                             |
| --------------- | --------------------------------------------------- |
| `[TestFixture]` | Marks the class as a test container                 |
| `[SetUp]`       | Initializes the calculator before each test         |
| `[Test]`        | Identifies test methods                             |
| `[TestCase]`    | Supplies multiple inputs to test methods            |
| `Assert.That`   | Compares expected and actual outcomes               |
| `Assert.Throws` | Validates exception handling (e.g., divide-by-zero) |
