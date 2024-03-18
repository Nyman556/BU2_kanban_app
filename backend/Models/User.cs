using Microsoft.AspNetCore.Identity;

namespace backend;

public class User : IdentityUser
{
    public List<Group> Groups { get; set; }
    public DateTime CreationDate { get; set; } =
        DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc);

    public User() { }
}
