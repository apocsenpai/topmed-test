using topmed_test.Interfaces;
using topmed_test.Models.DTOs;
using topmed_test.Models.Entities;

namespace topmed_test.Services
{
    public class LoginAttemptService : ILoginAttemptService
    {
        private readonly ILoginAttemptRepository _loginAttemptRepository;
        public LoginAttemptService(ILoginAttemptRepository loginAttemptRepository)
        {
            _loginAttemptRepository = loginAttemptRepository;
        }

        public async Task<bool> ExceededTheAttemptLimit(AuthDTO credentials)
        {
            var threeLastLoginAttempts = await _loginAttemptRepository.GetThreeLastAttemptsInTwentyMinutes(credentials);

            return threeLastLoginAttempts.Count() >= 3 && !HasSomeSuccessAttempt(threeLastLoginAttempts);
        }

        public Task Create(LoginAttemptDTO loginAttemptDTO)
        {
            return _loginAttemptRepository.Create(loginAttemptDTO);
        }

        public bool HasSomeSuccessAttempt(IEnumerable<LoginAttempt> attempts) => attempts.Any(a => a.AttemptStatus);
    }
}
