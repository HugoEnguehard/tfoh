CREATE DATABASE IF NOT EXISTS tfoh;

CREATE TABLE users 
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(250),
    lastname VARCHAR(250),
    username VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,  
    date_creation VARCHAR(10) NOT NULL,  
    bio TEXT,  
    favorite_jdr VARCHAR(100),  
    preference VARCHAR(250),
    profile_pictue TEXT
)