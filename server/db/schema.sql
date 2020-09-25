DROP DATABASE IF EXISTS golf_app;

CREATE DATABASE golf_app;

USE golf_app;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(255) NOT NULL,
    user_pass VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO users (user_name, user_pass) VALUES ("test", "test");