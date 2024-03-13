using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace backend;

public class ApplicationDbContext : IdentityDbContext<User>
{
    public DbSet<Task> Tasks { get; set; }
    public DbSet<Group> Groups { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) { }
}
