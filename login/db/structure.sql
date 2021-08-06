CREATE TABLE users (
id int(5) NOT NULL,
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL
) 

INSERT INTO users (id, email, password) 
VALUES(1, 'kavi.testkavi@gmail.com', '56jhuhguftyd666');

INSERT INTO users (id, email, password) 
VALUES(2, 'kiri.testkiri@gmail.com', '56jhuhguft666');





ALTER TABLE users
  ADD PRIMARY KEY ('id'),
  ADD UNIQUE KEY `mail` ('email');

/*delete data*/

/*DELETE from users
where id=2;*/



