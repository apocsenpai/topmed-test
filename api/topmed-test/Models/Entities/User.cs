using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace topmed_test.Models.Entities
{
    public class User : CommonEntity
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Email is required!")]
        [StringLength(80, ErrorMessage = "Email exceeded character limit!")]
        [EmailAddress(ErrorMessage = "Email is invalid!")]
        public string Email { get; set; } = null!;

        [Required(ErrorMessage = "O campo Senha é obrigatório!")]
        [StringLength(100)]
        public string Password { get; set; } = null!;
    }
}
