namespace backend;

using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

public class GroupService
{
    private ApplicationDbContext context;

    public GroupService(ApplicationDbContext context)
    {
        this.context = context;
    }

    public Group CreateGroup(string title, string userId)
    {
        if (string.IsNullOrEmpty(title))
        {
            throw new ArgumentNullException(nameof(title), "Group title cannot be null or empty");
        }

        Group newGroup = new Group(title);

        User user = context.Users.FirstOrDefault(u => u.Id == userId);

        if (user == null)
        {
            throw new ArgumentNullException(nameof(userId), "User not found");
        }

        newGroup.Members.Add(user);

        context.Groups.Add(newGroup);
        context.SaveChanges();

        return newGroup;
    }

    public Group RemoveGroup(Guid Id)
    {
        Group? group = context.Groups.Find(Id);

        if (group == null)
        {
            throw new ArgumentNullException("Group not found");
        }

        context.Groups.Remove(group);
        context.SaveChanges();
        return group;
    }

    public List<Group> GetAllGroups()
    {
        List<Group> groupList = context
            .Groups.Include(g => g.Members)
            .Include(g => g.Tasks)
            .ToList();
        if (groupList == null)
        {
            return new List<Group>();
        }

        return groupList;
    }

    public List<Group> GetUserGroups(string userId)
    {
        User user = context
            .Users.Include(u => u.Groups)
            .ThenInclude(g => g.Members)
            .FirstOrDefault(u => u.Id == userId);

        if (user == null)
        {
            throw new ArgumentNullException("User not found");
        }

        List<Group> userGroups = user.Groups.ToList();
        return userGroups;
    }

    public Group AddMembers(string userId, MemberDto dto)
    {
        Group? group = context.Groups.Find(dto.groupId);
        User? user = context.Users.FirstOrDefault(u => u.Email == dto.UserEmail);

        if (group == null)
        {
            throw new ArgumentNullException("Group is null or empty");
        }
        if (user == null)
        {
            throw new ArgumentNullException("User is null or empty");
        }

        group.Members.Add(user);
        context.Groups.Update(group);
        context.SaveChanges();
        return group;
    }

    public Group RemoveMembers(string userId, MemberDto dto)
    {
        Group? group = context
            .Groups.Include(g => g.Members)
            .FirstOrDefault(g => g.Id == dto.groupId);
        User? user = context.Users.FirstOrDefault(u => u.Email == dto.UserEmail);
        if (group == null)
        {
            throw new ArgumentNullException("Group is null or empty");
        }

        if (user == null)
        {
            throw new ArgumentNullException("User is null or empty");
        }

        group.Members.Remove(user);
        context.Groups.Update(group);
        context.SaveChanges();
        return group;
    }

    public List<Group> RemoveGroups()
    {
        List<Group> allGroups = context.Groups.ToList();

        foreach (var group in allGroups)
        {
            context.Remove(group);
        }

        context.SaveChanges();
        return allGroups;
    }
}
