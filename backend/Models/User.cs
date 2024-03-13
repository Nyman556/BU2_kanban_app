using Microsoft.AspNetCore.Identity;

namespace backend;

public class User : IdentityUser
{
    public DateTime CreationDate { get; set; }

    public User()
    {
        this.CreationDate = DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc);
    }
}
