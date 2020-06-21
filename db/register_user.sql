INSERT INTO user_info (username, password, email)
VALUES ($1, $2, $3);

SELECT * FROM user_info
WHERE username = $1;