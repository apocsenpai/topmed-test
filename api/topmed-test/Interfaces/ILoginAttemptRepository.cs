using topmed_test.Models.DTOs;
using topmed_test.Models.Entities;

namespace topmed_test.Interfaces
{
    public interface ILoginAttemptRepository
    {
        Task<IEnumerable<LoginAttempt>> GetThreeLastAttemptsInTwentyMinutes(AuthDTO credentials);
        Task Create(LoginAttemptDTO loginAttemptDTO);
    }
}
