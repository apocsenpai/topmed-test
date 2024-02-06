using System.ComponentModel.DataAnnotations;

namespace topmed_test.Models.DTOs
{
    public class AuthDTO
    {
        [Required(ErrorMessage = "Email is required!")]
        public string Email { get; set; } = null!;

        [Required(ErrorMessage = "Password is required!")]
        public string Password { get; set; } = null!;
    }
}
