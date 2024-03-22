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

}
