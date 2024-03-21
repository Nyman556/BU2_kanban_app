namespace backend;

public class Task
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }

    //public User Owner { get; set; }
    public int Status { get; set; }
    public DateTime CreationDate { get; set; }

    public Group Parent_Group { get; set; }

    public Task() { }

    public Task(string title, string description, Group group)
    {
        this.Title = title;
        this.Description = description;
        //this.Owner = owner;
        this.Parent_Group = group;
        this.Status = 0;
        this.CreationDate = DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc);
    }

    public void UpdateStatus(int status)
    {
        this.Status = status;
    }
}
