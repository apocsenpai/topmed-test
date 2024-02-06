using System.ComponentModel.DataAnnotations;

namespace topmed_test.Models.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string Email { get; set; } = null!;
    }
}
