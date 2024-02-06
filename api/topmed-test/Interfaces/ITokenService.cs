using topmed_test.Models.Entities;

namespace topmed_test.Interfaces
{
    public interface ITokenService
    {
        string GetToken(User _userData);
    }
}
