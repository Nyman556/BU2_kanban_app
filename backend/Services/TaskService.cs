namespace backend;

public class TaskService
{
    private ApplicationDbContext context;

    public TaskService(ApplicationDbContext context)
    {
        this.context = context;
    }
/*
         public Task CreateTask(string title, string description, Guid groupId)
        {
            Group? group = context.Groups.Find(groupId);
    
            if (group != null)
            {
                Task task = new Task(title, description, group);
                context.Tasks.Add(task);
                context.SaveChanges();
                return task;
            }
    
            throw new ArgumentException("Group can't be null or empty!");
        } */

    public Task RemoveTask(Guid taskId)
    {
        Task? task = context.Tasks.Find(taskId);

        if (task != null)
        {
            context.Tasks.Remove(task);
            context.SaveChanges();
        }

        throw new ArgumentException("Group can't be null or empty!");
    }

    public List<Task> GetAllTask()
    {
        return new List<Task>();
    }

    public Task UpdateTask(Guid TaskId, string title, string description)
    {
        Task? task = context.Tasks.Find(TaskId);

        if (task != null)
        {
            task.Title = title;
            task.Description = description;
            context.Update(task);
            context.SaveChanges();
        }

        throw new ArgumentException("Group or Task can't be null or empty!");
    }

    public Task UpdateStatus(Guid TaskId, int status)
    {
        //Ändra Status
        Task? task = context.Tasks.Find(TaskId);

        if (task != null)
        {
            task.UpdateStatus(status);
            context.Update(task);
            context.SaveChanges();
        }

        throw new ArgumentException("Group or Task can't be null or empty!");
    }
}
