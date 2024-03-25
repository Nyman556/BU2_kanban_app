using System.Net.Http.Json;
using backend;
using Moq;
using Xunit;

namespace backend.UnitTests.Services
{
    public class ServiceTests
    {
        [Fact]
        public void CreateGroup_NormalValues_ReturnGroup()
        {
            // Given
            var mockContext = new Mock<ApplicationDbContext>(); //mockar context
            var service = new GroupService(mockContext.Object); //mockar service

            string TestTitle = "Group 1";
            string TestUserId = "Test_Generated_id";

            // When
            Group group = service.CreateGroup(TestTitle, TestUserId);

            // Then
            Assert.Equal(TestTitle, group.Title);
            // Assert.Equal(TestUserId, group.userId);
        }
    }
}
