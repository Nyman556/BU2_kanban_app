using System.Net.Http.Json;

namespace Tests;

public class SomeTests : IClassFixture<ApplicationFactory<backend.Program>>
{
    private readonly ApplicationFactory<backend.Program> factory;

    public SomeTests(ApplicationFactory<backend.Program> factory)
    {
        this.factory = factory;
    }

    [Fact]
    public async Task CreateGroup()
    {
        // Given
        var client = factory.CreateClient();
        var dto = new backend.CreateGroupDto("TestTitle");

        // When
        var response = await client.PostAsJsonAsync<backend.CreateGroupDto>(
            "/group/creategroup",
            dto
        );
        var result = await response.Content.ReadFromJsonAsync<backend.CreateGroupDto>();

        // Then
        response.EnsureSuccessStatusCode();
        Assert.NotNull(result);
        Assert.Equal("TestTitle", result.Title);
    }

    [Fact]
    public async Task CreateGroupBadInput()
    {
        // Given
        var client = factory.CreateClient();
        var dto = new backend.CreateGroupDto(null);

        // When
        var response = await client.PostAsJsonAsync<backend.CreateGroupDto>(
            "/group/creategroup",
            dto
        );

        // Then
        Assert.Equal(404, (int)response.StatusCode);
    }
}
