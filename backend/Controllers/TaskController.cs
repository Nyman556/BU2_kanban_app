namespace backend;

using Microsoft.AspNetCore.Mvc;

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
            if (dto == null)
            {
                return NotFound();
            }

            Task? task = taskService.CreateTask(dto);
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
