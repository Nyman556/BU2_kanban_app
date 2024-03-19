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

    public Group CreateGroup(string title)
    {
        if (string.IsNullOrEmpty(title))
        {
            throw new ArgumentNullException("Group not found");
        }

        Group newGroup = new Group(title);
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
        if (groupList != null)
        {
            return groupList;
        }

        return new List<Group>();
    }

    public Group AddMembers(string userId, MemberDto dto)
    {
        User? Owner = context.Users.Find(userId);
        Group? group = context.Groups.Find(dto.groupId);
        User? user = context.Users.FirstOrDefault(u => u.Email == dto.UserEmail);
        Console.WriteLine(user.Id);
        Console.WriteLine(user.UserName);
        Console.WriteLine(user.Email);

        Console.WriteLine(group.Title);
        Console.WriteLine("1");
        if (group != null && user != null)
        {
            group.Members.Add(user);
            context.Groups.Update(group);
            context.SaveChanges();
            return group;
        }
        throw new ArgumentNullException("Either User or Group is null or empty");
    }

    public Group RemoveMembers(Guid groupId, User user)
    {
        Group? group = context.Groups.Find(groupId);
        if (group != null && user != null)
        {
            group.RemoveUser(user);
            context.Groups.Update(group);
            context.SaveChanges();
            return group;
        }
        throw new ArgumentNullException("Either User or Group is null or empty");
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
