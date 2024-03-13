// create group
// add member
// remove member
// remove group

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
            if (dto == null)
            {
                return NotFound();
            }

            Group? group = groupService.CreateGroup(dto.Title);
            return Ok(group);
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

    // [HttpPost("addmember")]
    // public IActionResult AddMember([FromQuery] Guid id, User user)
    // {
    //     try
    //     {
    //         Group? group = groupService.AddMembers(id, User);

    //         if (user == null)
    //         {
    //             return NotFound();
    //         }

    //         return Ok(group);
    //     }
    //     catch (ArgumentNullException ex)
    //     {
    //         return BadRequest(ex.Message);
    //     }
    // }

    /*
        
        
        [HttpDelete("removemember")]
        public IActionResult RemoveMember()
        {
            
        }
        */
}
