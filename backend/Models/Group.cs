using System.Text.Json.Serialization; 


namespace backend;

public class Group
{
    public Guid Id { get; set; }
    public string? Title { get; set; }

    //User list
    public List<User>? Members { get; set; } = new List<User>();

    //Task List
    public List<Task> Tasks { get; set; } = new List<Task>();

    public Group() { }

    public Group(string title)
    {
        this.Title = title;
    }

    public void addUser(User user)
    {
        if (Members != null)
            this.Members.Add(user);
    }

    public void RemoveUser(User user)
    {
        if (Members != null)
            this.Members.Remove(user);
    }
}
