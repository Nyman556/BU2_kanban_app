namespace backend;

public class Group
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
    //User list
    public List<string>? Members { get; set; }

    //Task List
    public List<string> Tasks { get; set; } = new List<string>();

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

