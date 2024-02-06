using topmed_test.Interfaces;
using topmed_test.Models.DTOs;

namespace topmed_test.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly ILoginAttemptService _loginAttemptService;
        private readonly ITokenService _tokenService;
        public AuthService(IUserRepository userRepository, ITokenService tokenService, ILoginAttemptService loginAttemptService)
        {
            _userRepository = userRepository;
            _tokenService = tokenService;
            _loginAttemptService = loginAttemptService;
        }

        public async Task<TokenDTO> Authenticate(AuthDTO credentials)
        {

            if (await _loginAttemptService.ExceededTheAttemptLimit(credentials)) throw new UnauthorizedAccessException("Locked - This account is locked for the owner's safety!");

            var user = await _userRepository.FindByCredentials(credentials);

            if (user == null)
            {
                await _loginAttemptService.Create(new() { Email = credentials.Email, AttemptStatus = false });
                throw new UnauthorizedAccessException("Invalid access!");
            }

            await _loginAttemptService.Create(new() { Email = credentials.Email, AttemptStatus = true });

            var accessToken = _tokenService.GetToken(user);

            return new TokenDTO { Token = accessToken };
        }
    }
}
