using Microsoft.EntityFrameworkCore;
using topmed_test.Data;
using topmed_test.Interfaces;
using topmed_test.Models.DTOs;
using topmed_test.Models.Entities;

namespace topmed_test.Repositories
{
    public class LoginAttemptRepository : ILoginAttemptRepository
    {
        private readonly DataContext _dataContext;

        public LoginAttemptRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<IEnumerable<LoginAttempt>> GetThreeLastAttemptsInTwentyMinutes(AuthDTO credentials)
        {
            return await _dataContext.LoginAttempts
            .Where(l => l.Email.ToLower() == credentials.Email.ToLower() &&
                        l.CreatedAt > DateTime.Now.AddMinutes(-20))
            .OrderByDescending(l => l.CreatedAt).Take(3)
            .ToListAsync();
        }

        public async Task Create(LoginAttemptDTO loginAttemptDTO)
        {
            var loginAttempt = new LoginAttempt
            {
                Email = loginAttemptDTO.Email,
                AttemptStatus = loginAttemptDTO.AttemptStatus,
            };

            _dataContext.LoginAttempts.Add(loginAttempt);
            await _dataContext.SaveChangesAsync();
        }
    }
}
