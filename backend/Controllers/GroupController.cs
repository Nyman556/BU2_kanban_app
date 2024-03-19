// create group Check
// add member Check
// remove member Check
// remove group Check
// remove all groups Check
// Get all groups Check
// Get all users from a group - in progress

namespace backend;

using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

public class CreateGroupDto
{
    public Guid Id { get; set; }
    public string? Title { get; set; }

    public CreateGroupDto(string title)
    {
        this.Title = title;
    }
}

public class GroupDto
{
   public Guid Id { get; set; }
    public string? Title { get; set; }

    // User list
    public List<UserDto>? Members { get; set; }

    // Task List
    public List<TaskDto>? Tasks { get; set; } 

    public GroupDto(Group group) 
    {
        this.Id = group.Id;
        this.Title = group.Title;
        this.Members = group.Members.Select(user => new UserDto(user)).ToList();
        this.Tasks = group.Tasks.Select(task => new TaskDto(task)).ToList();
    }
   

} 
public class UserDto
{
    public string Name { get; set; }
    public string Email { get; set; }

    public UserDto() { }

    public UserDto(User user)
    {
        this.Name = user.UserName; // Assuming UserName property exists in your User class
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

[ApiController]
[Route("group")]
public class GroupController : ControllerBase
{
    private GroupService groupService;

    public GroupController(GroupService groupService)
    {
        this.groupService = groupService;
    }

    [HttpPost("creategroup")]
    public IActionResult CreateGroup([FromBody] CreateGroupDto dto)
    {
        try
        {
            if (dto.Title != null)
            {
                Group? group = groupService.CreateGroup(dto.Title);

                GroupDto? groupRespons = new GroupDto(group);
                return Ok(groupRespons);
            }
            return NotFound();
        }
        catch (ArgumentNullException ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("removegroup/{id}")]
    public IActionResult RemoveGroup(Guid id)
    {
        try
        {
            Group? group = groupService.RemoveGroup(id);

            if (group == null)
            {
                return NotFound();
            }

            return Ok(group);
        }
        catch (ArgumentNullException ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("getgroups")]
    public List<GroupDto> GetAllGroup()
    {
        List<Group> list = groupService.GetAllGroups();
        var dtoList = list.Select(group => new GroupDto(group)).ToList();
        return dtoList;
    }

    [HttpPost("addmember")]
    //  [Authorize("add-members")]
    public IActionResult AddMember([FromBody] MemberDto dto)
    {
        try
        {   if (dto == null)
            {
                return NotFound();
            }

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

         

            Group? group = groupService.AddMembers(userId, dto);

            GroupDto groupRespons = new GroupDto(group);
            

            return Ok(groupRespons);
        }
        catch (ArgumentNullException ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("removemember")]
    public IActionResult RemoveMember([FromQuery] Guid id, User user)
    {
        try
        {   
            if (user == null)
            {
                return NotFound();
            }

            Group? group = groupService.RemoveMembers(id, user);

            return Ok(group);
        }
        catch (ArgumentNullException ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("deleteallgroups")]
    public IActionResult RemoveGroups()
    {
        var response = groupService.RemoveGroups();
        return Ok(response);
    }
}
