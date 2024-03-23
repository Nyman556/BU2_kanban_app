using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend;

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
    [Authorize("login")]
    public IActionResult CreateGroup([FromBody] CreateGroupDto dto)
    {
        try
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (dto.Title == null)
            {
                return NotFound();
            }

            Group? group = groupService.CreateGroup(dto.Title, userId);

            GroupDto? groupRespons = new GroupDto(group);

            return Ok(groupRespons);
        }
        catch (ArgumentNullException ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("removegroup/{id}")]
    [Authorize("login")]
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
    [Authorize("login")]
    public List<GroupDto> GetAllGroup()
    {
        List<Group> list = groupService.GetAllGroups();
        var dtoList = list.Select(group => new GroupDto(group)).ToList();
        return dtoList;
    }

    [HttpPost("addmember")]
    [Authorize("login")]
    public IActionResult AddMember([FromBody] MemberDto dto)
    {
        try
        {
            if (dto == null)
            {
                return NotFound();
            }

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            Group? group = groupService.AddMembers(userId, dto);

            GroupDto groupResponse = new GroupDto(group);

            return Ok(groupResponse);
        }
        catch (ArgumentNullException ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("removemember")]
    [Authorize("login")]
    public IActionResult RemoveMember([FromBody] MemberDto dto)
    {
        try
        {
            if (dto == null)
            {
                return NotFound();
            }
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            Group? group = groupService.RemoveMembers(userId, dto);
            GroupDto groupResponse = new GroupDto(group);
            return Ok(groupResponse);
        }
        catch (ArgumentNullException ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("deleteallgroups")]
    [Authorize("login")]
    public IActionResult RemoveGroups()
    {
        var response = groupService.RemoveGroups();
        return Ok(response);
    }
}
