using System.ComponentModel.DataAnnotations;

namespace topmed_test.Models.Entities
{
    public class LoginAttempt : CommonEntity
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Email is required!")]
        [StringLength(80, ErrorMessage = "Email exceeded character limit!")]
        [EmailAddress(ErrorMessage = "Email is invalid!")]
        public string Email { get; set; } = null!;

        [Required]
        public bool AttemptStatus { get; set; }
    }
}
