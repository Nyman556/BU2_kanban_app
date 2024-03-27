using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace backend;

public interface IGroupRepository
{
    void AddGroup(Group group);
}

public class GroupRepository : IGroupRepository
{
    ApplicationDbContext context;

    public GroupRepository(ApplicationDbContext context)
    {
        this.context = context;
    }

    public override void AddGroup(Group group)
    {
        this.context.Groups.Add(group);
        this.context.SaveChanges();
    }
}

public interface IUserRepository
{
    User? Find(Guid id);
}

public class UserRepository : IUserRepository
{
    ApplicationDbContext context;

    public UserRepository(ApplicationDbContext context)
    {
        this.context = context;
    }

    public override User? Find(Guid id)
    {
        return context.Users.Find(id);
    }
}

public class ApplicationDbContext : IdentityDbContext<User>
{
    public DbSet<Task> Tasks { get; set; }
    public DbSet<Group> Groups { get; set; }

    public ApplicationDbContext() { }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) { }
}
