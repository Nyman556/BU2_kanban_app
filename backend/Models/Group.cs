namespace backend;

public class Group
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public List<string> Members;

    public List<string> Tasks = new List<string>();

    public Group() { }

    public Group(string title, List<string> userList)
    {
        this.Title = title;
        this.Members = userList;
    }

    public void addUser(string user)
    {
        this.Members.Add(user);
    }

    public void RemoveUser(string user)
    {
        this.Members.Remove(user);
    }
}

public class GroupDto
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
}
