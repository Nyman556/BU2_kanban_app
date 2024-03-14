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

[ApiController]
[Route("group")]
public class GroupController : ControllerBase
{
    private GroupService groupService;

    public class GroupDto
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }

        public GroupDto(string title)
        {
            this.Title = title;
        }
    }

    public class MemberDto
    {
        public Guid Id { get; set; }
        public string? User { get; set; }

        public MemberDto(string user)
        {
            this.User = user;
        }
    }

    public GroupController(GroupService groupService)
    {
        this.groupService = groupService;
    }

    [HttpPost("creategroup")]
    public IActionResult CreateGroup([FromBody] GroupDto dto)
    {
        try
        {
            if (dto.Title != null)
            {
                Group? group = groupService.CreateGroup(dto.Title);
            return Ok(group);
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
    public List<Group> GetAllGroup()
    {
        List<Group> list = groupService.GetAllGroups();
        return list;
    }

    [HttpPost("addmember")]
    public IActionResult AddMember([FromQuery] Guid id, string user)
    {
        // hämta användaren
        // 
        try
        {
           
            Group? group = groupService.AddMembers(id, User);

            if (user == null)
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
  
    [HttpDelete("removemember")]
    public IActionResult RemoveMember([FromQuery] Guid id, string user) 
    {
        try
        {
            Group? group = groupService.RemoveMembers(id, user);

            if (user == null)
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

    [HttpDelete("deleteallgroups")]
    public IActionResult RemoveGroups() 
    {
        var response = groupService.RemoveGroups();
        return Ok(response);
    }

    
      
}
