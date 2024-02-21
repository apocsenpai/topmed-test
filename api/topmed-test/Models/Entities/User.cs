using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace topmed_test.Models.Entities
{
    public class User : CommonEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Email is required!")]
        [StringLength(80, ErrorMessage = "Email exceeded character limit!")]
        [EmailAddress(ErrorMessage = "Email is invalid!")]
        public string Email { get; set; } = null!;

        [Required(ErrorMessage = "O campo Senha é obrigatório!")]
        [StringLength(100)]
        public string Password { get; set; } = null!;
    }
}
