using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend;

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
    [Authorize("login")]
    public IActionResult CreateTask([FromBody] CreateTaskDto dto)
    {
        try
        {
            var id = User.FindFirstValue(ClaimTypes.NameIdentifier);
     

            if (dto == null)
            {
                return NotFound();
            }
            // if (id == null)
            // {
            //     return NotFound();
            // }

            Task? task = taskService.CreateTask(dto, id);
            TaskDto? taskResponse = new TaskDto(task);
            return Ok(taskResponse);
        }
        catch (ArgumentNullException ex)
        {
            return BadRequest(ex.Message);
        }
    }


    [HttpDelete("removeTask/{id}")]
    [Authorize("login")]
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
    [Authorize("login")]
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
    [Authorize("login")]
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
    [Authorize("login")]
    public List<Task> GetAllTasks()
    {
        List<Task> taskList = taskService.GetAllTask();
        return taskList;
    }
}
