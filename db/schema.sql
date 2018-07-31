DROP DATABASE IF EXISTS burgers2;
CREATE DATABASE burgers2;

USE burgers2;

-- create table burgers(
--     id INT AUTO_INCREMENT NOT NULL,
-- 	burger_name VARCHAR (255) NOT NULL,
--     devoured BOOLEAN DEFAULT false,
--     createdAt TIMESTAMP NOT NULL,
--     updatedAt TIMESTAMP NOT NULL,
--     PRIMARY KEY (id)
-- );

-- create table eaters(
--     id INT AUTO_INCREMENT NOT NULL,
--     eater_name VARCHAR (255) NOT NULL,
--     burgerId INT NOT NULL,
--     createdAt TIMESTAMP NOT NULL,
--     updatedAt TIMESTAMP NOT NULL,
--     PRIMARY KEY(id)
-- );