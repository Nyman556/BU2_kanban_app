namespace backend;

using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

public class CreateTaskDto
{
    public string Title { get; set; }
    public string Description { get; set; }

    public Guid Parent_Group { get; set; }

    public CreateTaskDto(string title, string description, Guid group)
    {
        this.Title = title;
        this.Description = description;
        this.Parent_Group = group;
    }
}
public class TaskDto
{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime CreationDate { get; set; }
    public GroupDto Parent_Group { get; set; }
     public UserDto Owner { get; set; }
    public int Status { get; set; }

  public TaskDto(Task task)
    {
        this.Title = task.Title;
        this.Description = task.Description;
        this.Owner = new UserDto(task.Owner);
        this.Parent_Group = new GroupDto(task.Parent_Group);
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

[ApiController]
[Route("tasks")]
public class TaskController : ControllerBase
{
    private TaskService taskService;
    private ApplicationDbContext context;

    public TaskController(TaskService taskService, ApplicationDbContext context)
    {
        this.taskService = taskService;
        this.context = context;
    }

    [HttpPost("create")]
    [Authorize("create-Task")]
    public IActionResult CreateTask([FromBody] CreateTaskDto dto)
    {
        var id = User.FindFirstValue(ClaimTypes.NameIdentifier);

        try
        {
            if (dto == null)
            {
                return NotFound();
            }
            if (id == null)
            {
                return NotFound();
            }

            Task? task = taskService.CreateTask(dto, id);
            return Ok(dto);
        }
        catch (ArgumentNullException ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("removeTask/{id}")]
    public IActionResult DeleteTask(Guid id)
    {
        try
        {
            Task? task = taskService.RemoveTask(id);

            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }
        catch (ArgumentNullException ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPut("update/{id}")]
    public IActionResult UpdateTask(Guid id, [FromBody] CreateTaskDto dto)
    {
        Task? task = taskService.UpdateTask(id, dto);
        if (task == null)
        {
            return NotFound();
        }

        return Ok(task);
    }

    [HttpPut("updateStatus/{id}")]
    public IActionResult UpdateTaskStatus(Guid id, [FromBody] UpdateTaskDto status)
    {
        Task? task = taskService.UpdateStatus(id, status);
        if (task == null)
        {
            return NotFound();
        }

        return Ok(task);
    }

    [HttpGet("getAll")]
    public List<Task> GetAllTasks()
    {
        List<Task> tasklist = taskService.GetAllTask();
        return tasklist;
    }
}
