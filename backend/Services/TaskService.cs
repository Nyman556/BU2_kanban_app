namespace backend;

public class TaskService
{
    private ApplicationDbContext context;

    public TaskService(ApplicationDbContext context)
    {
        this.context = context;
    }

    public Task CreateTask(CreateTaskDto dto, string id)
    {
        if (dto == null)
        {
            throw new ArgumentNullException("add title, description and group id");
        }

        Group? group = context.Groups.Find(dto.Parent_Group);

        if (group == null)
        {
            throw new ArgumentNullException("Group can't be null or empty!");
        }
        Task task = new Task(dto.Title, dto.Description, group);
        context.Tasks.Add(task);
        context.SaveChanges();
        return task;
    }

    public Task RemoveTask(Guid taskId)
    {
        Task? task = context.Tasks.Find(taskId);

        if (task == null)
        {
            throw new ArgumentNullException("task not found");
        }

        context.Tasks.Remove(task);
        context.SaveChanges();
        return task;
    }

    public List<Task> GetAllTask()
    {
       
        List<Task> taskList = context.Tasks.ToList();
        return taskList;
    }

    //fixa en get task by group id?

    public Task UpdateTask(Guid TaskId, CreateTaskDto dto)
    {
        Task? task = context.Tasks.Find(TaskId);

        if (task != null)
        {
            if (task.Title != dto.Title && dto.Title != null)
            {
                task.Title = dto.Title;
            }
            if (task.Description != dto.Description && dto.Description != null)
            {
                task.Description = dto.Description;
            }

            context.Update(task);
            context.SaveChanges();
            return task;
        }

        throw new ArgumentException("Group or Task can't be null or empty!");
    }

    public Task UpdateStatus(Guid TaskId, UpdateTaskDto status)
    {
        //Ändra Status
        Task? task = context.Tasks.Find(TaskId);

        if (task != null)
        {
            task.Status = status.Value;
            context.Update(task);
            context.SaveChanges();
            return task;
        }

        throw new ArgumentException("Group or Task can't be null or empty!");
    }
}
