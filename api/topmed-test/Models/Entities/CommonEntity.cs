using Microsoft.EntityFrameworkCore;

namespace topmed_test.Models.Entities
{

    public abstract class CommonEntity
    {
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
