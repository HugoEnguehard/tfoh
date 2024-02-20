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
    profile_picture TEXT
);

CREATE TABLE campaigns 
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    is_favorite BOOLEAN NOT NULL,
    name VARCHAR(250) NOT NULL,
    status VARCHAR(250) NOT NULL,  
    jdr_type VARCHAR(100),
    date_creation VARCHAR(10) NOT NULL
);

CREATE TABLE characters
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    is_favorite BOOLEAN NOT NULL,
    name VARCHAR(250) NOT NULL,
    image TEXT,
    id_campaign INT NOT NULL,
    date_creation VARCHAR(10) NOT NULL,
    id_user INT NOT NULL, 
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_campaign) REFERENCES campaigns(id)
);
