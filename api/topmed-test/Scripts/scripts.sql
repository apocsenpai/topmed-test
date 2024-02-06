CREATE TABLE Users (
	Id int IDENTITY(1,1) PRIMARY KEY,
	Email varchar(80) NOT NULL UNIQUE,
	Password varchar(100) NOT NULL,
	CreatedAt DATETIME DEFAULT GETUTCDATE(),
	UpdatedAt DATETIME DEFAULT GETUTCDATE()
);

INSERT INTO Users(Email, Password) VALUES ('lalala@lala.com', 'sdasdasd')

CREATE TABLE LoginAttempts (
	Id int IDENTITY(1,1) PRIMARY KEY,
	Email varchar(80) NOT NULL,
	AttemptStatus BIT NOT NULL, -- SQL server não tem tipo booleano :/
	CreatedAt DATETIME DEFAULT GETUTCDATE(),
	UpdatedAt DATETIME DEFAULT GETUTCDATE()
);

-- Insert para testar o SELECT abaixo. Duas tentativas de logins recentes e duas mais antigas. 
INSERT INTO LoginAttempts (Email, AttemptStatus, CreatedAt) VALUES 
('lala@lala.com', 0, GETUTCDATE()), ('lalala@lala.com', 1, GETUTCDATE()), ('lala1@lala.com', 0, DATEADD(HOUR, -3, GETUTCDATE())), ('lala2@lala.com', 1, DATEADD(HOUR, -3, GETUTCDATE())) ;

SELECT u.Id, u.Email FROM Usuarios AS u 
JOIN LoginAttempts AS l ON u.Email=l.Email 
WHERE l.AttemptStatus=1 
AND l.CreatedAt >= DATEADD(HOUR, -2, GETUTCDATE())
