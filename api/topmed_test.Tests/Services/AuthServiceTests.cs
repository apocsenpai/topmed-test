using AutoFixture;
using Moq;
using topmed_test.Interfaces;
using topmed_test.Models.DTOs;
using topmed_test.Models.Entities;
using topmed_test.Services;

namespace topmed_test.Test.Services
{
    public class AuthServiceTests
    {
        [Fact]
        public async void ValidCredentials_AuthenticateIsCalled_ReturnAccessToken()
        {
            // Arrange
            var credentialsInput = new Fixture().Create<AuthDTO>();

            var user = new User
            {
                Id = 1,
                Email = credentialsInput.Email,
                Password = credentialsInput.Password,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
            };

            var userRepositoryMock = new Mock<IUserRepository>();
            var loginAttemptServiceMock = new Mock<ILoginAttemptService>();
            var tokenServiceMock = new Mock<ITokenService>();

            loginAttemptServiceMock.Setup(l => l.ExceededTheAttemptLimit(credentialsInput)).ReturnsAsync(false);

            userRepositoryMock.Setup(u => u.FindByCredentials(credentialsInput)).ReturnsAsync(user);

            tokenServiceMock.Setup(t => t.GetToken(user)).Returns("token");

            var authService = new AuthService(userRepositoryMock.Object, tokenServiceMock.Object, loginAttemptServiceMock.Object);

            // Act
            var result = await authService.Authenticate(credentialsInput);

            
            // Assert

            Assert.NotNull(result);
            Assert.Equal("token", result.Token);

            loginAttemptServiceMock.Verify(l => l.ExceededTheAttemptLimit(It.IsAny<AuthDTO>()), Times.Once);
        }

        [Fact]
        public async void InvalidCredentials_AuthenticateIsCalledThreeTimes_ThrowsAnLockedMessage()
        {
            // Arrange
            var credentialsInput = new Fixture().Create<AuthDTO>();

            var user = new User
            {
                Id = 1,
                Email = credentialsInput.Email,
                Password = credentialsInput.Password,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
            };

            var userRepositoryMock = new Mock<IUserRepository>();
            var loginAttemptServiceMock = new Mock<ILoginAttemptService>();
            var tokenServiceMock = new Mock<ITokenService>();

            loginAttemptServiceMock.Setup(l => l.ExceededTheAttemptLimit(credentialsInput)).ReturnsAsync(true);

            var authService = new AuthService(userRepositoryMock.Object, tokenServiceMock.Object, loginAttemptServiceMock.Object);

            // Act

            var unauthorizedException = await Assert.ThrowsAsync<UnauthorizedAccessException>(() => authService.Authenticate(credentialsInput));

            Assert.Equal("Locked - This account is locked for the owner's safety!", unauthorizedException.Message);
            loginAttemptServiceMock.Verify(l => l.ExceededTheAttemptLimit(It.IsAny<AuthDTO>()), Times.Once);
        }
    }
}
