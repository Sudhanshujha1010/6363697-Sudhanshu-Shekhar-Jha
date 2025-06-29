# Unit Testing with Moq
## Objective

This project demonstrates **writing unit-testable code** by mocking external dependencies using **Moq**. It simulates an email notification module without actually sending emails, enabling fast and isolated unit testing.

---
## Scenario

The application sends an email to customers after a transaction.  
You need to **unit test** this functionality **without sending real emails**.

The solution:
- Extract the mail-sending logic into an interface `IMailSender`
- Implement it in `MailSender`
- Inject it into `CustomerComm` using constructor injection
- Mock `IMailSender` in tests using **Moq**
---
## Testing Setup

- Framework: `.NET`
- Test Framework: `NUnit`
- Test Runner: `Microsoft.NET.Test.Sdk` + `NUnit3TestAdapter`
---
##  Task 1 – Create the Class Library (CustomerCommLib)

###  Objective

- Implement a mail-sending feature using `SmtpClient`.
- Use dependency injection via `IMailSender` interface.
- Make the class testable by mocking external email dependency.

### Steps

1. **Create a class library project**
   ```bash
   dotnet new classlib -n CustomerCommLib
   ```
2. **Define `IMailSender` interface**
    ```csharp
    public interface IMailSender
    {
        bool SendMail(string toAddress, string message);
    }
    ```
3. **Define `IMailSender`**
    ```csharp
    namespace CustomerCommLib
    {
        public class MailSender : IMailSender
        {
            public bool SendMail(string toAddress, string message)
            {
                MailMessage mail = new MailMessage();
                SmtpClient smtpServer = new SmtpClient("smtp.gmail.com");

                mail.From = new MailAddress("your_email_address@gmail.com");
                mail.To.Add(toAddress);
                mail.Subject = "Test Mail";
                mail.Body = message;

                smtpServer.Port = 587;
                smtpServer.Credentials = new NetworkCredential("username", "password");
                smtpServer.EnableSsl = true;

                smtpServer.Send(mail);

                return true;
            }
        }
    }
    ```
4. **Create a class `CustomerComm`**
    ```csharp
    namespace CustomerCommLib
    {
        public class CustomerComm
        {
            IMailSender _mailSender;

            public CustomerComm(IMailSender mailSender)
            {
                _mailSender = mailSender;
            }

            public bool SendMailToCustomer()
            {
                _mailSender.SendMail("cust123@abc.com", "Some Message");
                return true;
            }
        }
    }
    ```
> This design makes the mail logic testable, by injecting a mockable dependency (`IMailSender`) instead of hardcoding SMTP logic.
---
##  Task 2 – Create Unit Tests with Moq and NUnit
###  Objective

Write a unit test for `CustomerComm` that:
- Mocks `IMailSender`
- Ensures `SendMailToCustomer()` returns `true`
- Avoids real email sending

### Steps
1. **Create test project**
    ```bash
    dotnet new classlib -n CustomerComm.Tests
    ```
2. **Add References**
    ```bash
    dotnet add CustomerComm.Tests reference CustomerCommLib
    ```
3. **Install required NuGet Packages**
    ```bash
    cd CustomerComm.Tests

    dotnet add package NUnit
    dotnet add package NUnit3TestAdapter
    dotnet add package Microsoft.NET.Test.Sdk
    dotnet add package Moq

    cd ..
    ```
4. **Write test in `CustomerCommTests.cs`**
    ```csharp
    using NUnit.Framework;
    using Moq;
    using CustomerCommLib;

    namespace CustomerComm.Tests
    {
        [TestFixture]
        public class CustomerCommTests
        {
            private Mock<IMailSender> _mockMailSender!;
            private CustomerCommLib.CustomerComm _customerComm!;

            [OneTimeSetUp]
            public void Setup()
            {
                _mockMailSender = new Mock<IMailSender>();
                _mockMailSender
                    .Setup(m => m.SendMail(It.IsAny<string>(), It.IsAny<string>()))
                    .Returns(true);

                _customerComm = new CustomerCommLib.CustomerComm(_mockMailSender.Object);
            }

            [TestCase]
            public void SendMailToCustomer_ReturnsTrue()
            {
                var result = _customerComm!.SendMailToCustomer();
                Assert.That(result, Is.True);
            }
        }
    }
    ```
---
## Run the Test
```bash
dotnet test
```
