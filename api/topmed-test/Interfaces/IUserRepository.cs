using topmed_test.Models.DTOs;
using topmed_test.Models.Entities;

namespace topmed_test.Interfaces
{
    public interface IUserRepository
    {
        Task<User> FindByCredentials(AuthDTO credentials);
    }
}
