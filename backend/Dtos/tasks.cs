namespace backend;

public class CreateTaskDto
{
    public string Title { get; set; }
    public string Description { get; set; }

    public Guid Parent_Group { get; set; }

    public CreateTaskDto() { }

    public CreateTaskDto(string title, string description, Guid group)
    {
        this.Title = title;
        this.Description = description;
        this.Parent_Group = group;
    }
}

public class TaskDto
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime CreationDate { get; set; }

    public GroupDtoTask parent_group { get; set; }
    public int Status { get; set; }

    public TaskDto() { }

    public TaskDto(Task task)
    {
        this.Id = task.Id;
        this.Title = task.Title;
        this.Description = task.Description;
        this.parent_group = new GroupDtoTask(task.Parent_Group);
        this.Status = task.Status;
        this.CreationDate = task.CreationDate;
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