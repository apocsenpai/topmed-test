using topmed_test.Models.DTOs;
using topmed_test.Models.Entities;

namespace topmed_test.Interfaces
{
    public interface ILoginAttemptService
    {
        Task<bool> ExceededTheAttemptLimit(AuthDTO credentials);
        Task Create(LoginAttemptDTO loginAttemptDTO);
    }
}
