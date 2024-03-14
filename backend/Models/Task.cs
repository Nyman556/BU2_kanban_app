namespace backend;

public class Task
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    
    // påminnelse: owner ska vara User, och inte ett sträng värde!
    public string Owner { get; set; } = "";
    public int Status { get; set; }
    public DateTime CreationDate { get; set; }

    // public string Parent_Group { get; set; }

    public Task() { }

    public Task(string title, string description)
    {
        this.Title = title;
        this.Description = description;
        //this.Parent_Group = group;
        this.Status = 0;
        this.CreationDate = DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc);
    }

    //this
    public void UpdateStatus(int status)
    {
        this.Status = status;
    }
}

public class CreateTaskDto
{
    public string Title { get; set; }
    public string Description { get; set; }

    // public string Parent_Group { get; set; }

    public CreateTaskDto(string title, string description)
    {
        this.Title = title;
        this.Description = description;
        //this.Parent_Group = group;
    }
}

public class UpdateTaskDto
{
    public int Value { get; set; }

    public UpdateTaskDto() { }

    public UpdateTaskDto(int value)
    {
        this.Value = value;
    }
}
