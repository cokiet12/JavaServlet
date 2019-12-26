INSERT INTO user (id,pwd,nm,email,phone) 
	VALUES ('root','1234','구디','gudi@goodee.co.kr','00000000000');
	
SELECT * FROM user WHERE delYn = 'N';

UPDATE user SET delYn = 'Y' WHERE num = 1;

