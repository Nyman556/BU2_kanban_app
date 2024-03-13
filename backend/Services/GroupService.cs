namespace backend;

class GroupService
{
    //Tar int title och user
    private ApplicationDbContext context;

    public GroupService(ApplicationDbContext context)
    {
        this.context = context;
    }

    public Group CreateGroup(string title)
    {
        if (string.IsNullOrEmpty(title))
        {
            throw new ArgumentException("User not found");
        }
        Group newGroup = new Group(title, new List<string>());
        context.Groups.Add(newGroup);
        context.SaveChanges();
        return newGroup;
    }

    //Addmembers
    /*     public Group AddMembers(Guid groupId, Guid userId)
        {
            User? user = context.Users.Find(userId);
            Group? group = context.Groups.Find(groupId);
    
            if (group != null && user != null)
            {
                group.addUser(user);
                context.Groups.Update(group);
                context.SaveChanges();
                return group;
            }
    
            throw new ArgumentException("Eiter User or Group is null or empty");
        } */

    //removeMemers
    /*     public Group RemoveMembers(Guid groupId, Guid userId)
        {
            User? user = context.Users.Find(userId);
            Group? group = context.Groups.Find(groupId);
            if (group != null && user != null)
            {
                group.RemoveUser(user);
                context.Groups.Update(group);
                context.SaveChanges();
                return group;
            }
    
            throw new ArgumentException("Eiter User or Group is null or empty");
        } */

    //remove group
}
