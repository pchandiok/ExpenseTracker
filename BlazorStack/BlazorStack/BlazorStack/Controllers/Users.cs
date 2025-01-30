using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BlazorStack.Controllers;

[Route("api/[controller]")]
[ApiController]
public class Users : ControllerBase
{
    public IActionResult Index()
    {
        return Ok("Hello, World");
    }
}
