using Microsoft.EntityFrameworkCore;
using System.Xml;
using topmed_test.Models.Entities;

namespace topmed_test.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        public DbSet<LoginAttempt> LoginAttempts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<User>()
                .Property(c => c.Id)
                .HasDefaultValueSql("newsequentialid()");

            modelBuilder.Entity<LoginAttempt>()
                .Property(c => c.Id)
                .HasDefaultValueSql("newsequentialid()");

            modelBuilder.Entity<User>()
                .HasAlternateKey(u => u.Email);

            modelBuilder.Entity<User>()
                .Property(c => c.CreatedAt)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<User>()
                .Property(c => c.UpdatedAt)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<LoginAttempt>()
                .Property(c => c.CreatedAt)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<LoginAttempt>()
                .Property(c => c.UpdatedAt)
                .HasDefaultValueSql("getdate()");
        }
    }
}
