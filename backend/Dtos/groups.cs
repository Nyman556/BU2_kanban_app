namespace backend;

public class CreateGroupDto
{
    public Guid Id { get; set; }
    public string? Title { get; set; }

    public CreateGroupDto() { }

    public CreateGroupDto(string title)
    {
        this.Title = title;
    }
}

public class GroupDto
{
    public Guid Id { get; set; }
    public string? Title { get; set; }

    public List<UserDto>? Members { get; set; }

    public List<TaskDto>? Tasks { get; set; }

    public GroupDto() { }

    public GroupDto(Group group)
    {
        this.Id = group.Id;
        this.Title = group.Title;
        this.Members = group.Members.Select(user => new UserDto(user)).ToList();
        this.Tasks = group.Tasks.Select(task => new TaskDto(task)).ToList();
    }
}

public class GroupDtoTask
{
    public Guid Id { get; set; }
    public string? Title { get; set; }

    public List<UserDto>? Members { get; set; }

    public GroupDtoTask() { }

    public GroupDtoTask(Group group)
    {
        this.Id = group.Id;
        this.Title = group.Title;
        this.Members = group.Members.Select(user => new UserDto(user)).ToList();
    }
}

public class UserDto
{
    public string Name { get; set; }
    public string Email { get; set; }

    public UserDto() { }

    public UserDto(User user)
    {
        this.Name = user.UserName;
        this.Email = user.Email;
    }
}

public class MemberDto
{
    public Guid groupId { get; set; }
    public string UserEmail { get; set; }

    public MemberDto() { }

    public MemberDto(Guid id, string _email)
    {
        this.groupId = id;
        this.UserEmail = _email;
    }
}

