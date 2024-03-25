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
            var mockContext = new Mock<ApplicationDbContext>(); // Mock the context
            var service = new GroupService(mockContext.Object); // Instantiate the service

            string TestTitle = "Group 1";
            string TestUserId = "Test_Generated_id";

            // When
            Group group = service.CreateGroup(TestTitle, TestUserId);

            // Then
            Assert.Equal(TestTitle, group.Title);
            // Assert.Equal(TestUserId, group.userId);
        }

        [Fact]
        public void CreateTask_NormalValues_ReturnTask()
        {
            // Arrange
            var mockDbSet = new Mock<DbSet<Task>>();
            var mockContext = new Mock<ApplicationDbContext>();
            mockContext.Setup(c => c.Set<Task>()).Returns(mockDbSet.Object);

            var service = new TaskService(mockContext.Object);

            var dto = new CreateTaskDto
            {
                Title = "Task 1",
                Description = "Description of Task 1",
                Parent_Group = Guid.NewGuid() // Mocking a valid group id
            };

            // Act
            Task task = service.CreateTask(dto, "user_id");

            // Assert
            Assert.NotNull(task);
            Assert.Equal(dto.Title, task.Title);
            Assert.Equal(dto.Description, task.Description);
            // Assert other properties as needed
        }
    }
}
