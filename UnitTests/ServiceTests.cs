using System;
using System.Linq.Expressions;
using backend;
using Microsoft.EntityFrameworkCore;
using Moq;
using Xunit;

namespace backend.UnitTests.Services
{
    public class add
    {
        [Fact]
        public void addtest()
        {
            // Given
            int num1 = 1;
            int num2 = 2;

            // When
            int num3 = num1 + num2;

            // Then
            Assert.Equal(3, num3);
        }
    }

    public class ServiceTests
    {
        [Fact]
        public void CreateGroup_NormalValues_ReturnGroup()
        {
            // Given
            Guid TestUserId = //...;
            var mockSet = new Mock<DbSet<Group>>(); // Mock DbSet
            var mockContext = new Mock<IGroupRepository>(); //mockar context
            var userRepositoryMock = new Mock<IUserRepository>(); 
            mockContext.Setup(c => c.Groups).Returns(mockSet.Object); // sätter upp den mockade contexten
            mockContext.Setup(c => c.SaveChanges()).Returns(1); // Set up SaveChanges method
            userRepositoryMock.Setup(c => c.Find(userId)).Returns(new User());
            var service = new GroupService(mockContext.Object); //mockar service

            string TestTitle = "Group 1";
            

            // When
            Group group = service.CreateGroup(TestTitle, TestUserId);

            // Then
            Assert.Equal(TestTitle, group.Title);
            // Assert.Equal(TestUserId, group.userId);
        }
    }
}
