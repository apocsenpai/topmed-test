using Microsoft.AspNetCore.Mvc;
using topmed_test.Interfaces;
using topmed_test.Models;
using topmed_test.Models.DTOs;
using topmed_test.Repositories;
using topmed_test.Services;

namespace topmed_test.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [Route("/sign-in")]
        [HttpPost]
        public async Task<ActionResult<TokenDTO>> Authenticate(AuthDTO credentials)
        {
            try
            {
                var accessToken = await _authService.Authenticate(credentials);                

                return Ok(accessToken);
            }
            catch (Exception ex)
            {
                return Unauthorized(ex.Message);
            }
        }

    }
}
