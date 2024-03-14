namespace backend;

using Microsoft.AspNetCore.Mvc;

// Add task
// remove
// update
// get all
// update status?

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
    public IActionResult CreateTask([FromBody] CreateTaskDto dto)
    {
        try
        {
            return Ok();
        }
        catch (ArgumentException)
        {
            return BadRequest();
        }
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteTask(Guid id)
    {
        var deletedTask = taskService.RemoveTask(id);
        if (deletedTask == null)
        {
            return NotFound();
        }
        return Ok(deletedTask);
    }

    [HttpPut("update")]
    public string UpdateTask()
    {
        return "Hello!";
    }

    [HttpGet("get")]
    public string GetAllTasks()
    {
        return "Hello!";
    }
}
