using Microsoft.AspNetCore.Identity;

namespace backend;

public class User : IdentityUser
{
    public string Role { get; set; }
    public DateTime CreationDate { get; set; }

    public User(string role)
    {
        this.Role = role;
        this.CreationDate = DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc);
    }
}
