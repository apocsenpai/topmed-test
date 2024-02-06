using System.ComponentModel.DataAnnotations;

namespace topmed_test.Models.DTOs
{
    public class LoginAttemptDTO
    {
        public string Email { get; set; } = null!;
        public bool AttemptStatus { get; set; }
    }
}
