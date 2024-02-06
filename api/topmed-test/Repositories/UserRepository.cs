using Microsoft.EntityFrameworkCore;
using topmed_test.Data;
using topmed_test.Interfaces;
using topmed_test.Models.DTOs;
using topmed_test.Models.Entities;

namespace topmed_test.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _dataContext;

        public UserRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<User> FindByCredentials(AuthDTO credentials) =>
            await _dataContext.Users.Where(u => u.Email == credentials.Email && u.Password == credentials.Password).FirstOrDefaultAsync();
    }
}

