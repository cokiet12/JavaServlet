CREATE table user (
   num		INT 			NOT NULL AUTO_INCREMENT, 
	id 		VARCHAR(30) NOT null,
	pwd 		VARCHAR(16) NOT null,
	nm 		VARCHAR(30) NOT null,
	email 	VARCHAR(50) NOT null,
	phone  	VARCHAR(11) NULL,
	PRIMARY KEY (num)
);