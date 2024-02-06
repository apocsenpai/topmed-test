using topmed_test.Models.DTOs;

namespace topmed_test.Interfaces
{
    public interface IAuthService
    {
        Task<TokenDTO> Authenticate(AuthDTO credentials);
    }
}
