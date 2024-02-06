using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API.Models.Entities;


namespace API.Tests.Models.Entities
{
    public class UserTests
    {
        [Fact]
        public void User_Validate_Email_Length()
        {
            var result = Assert.Throws<DomainException>(() => new User())
            }
    }
}
