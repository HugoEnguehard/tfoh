USE tfoh;

-- Insérer des utilisateurs
INSERT INTO users (firstname, lastname, username, email, password, date_creation, bio, favorite_jdr, preference, profile_picture) 
VALUES 
('John', 'Doe', 'johndoe', 'john@example.com', 'hashedpassword1', '20/02/2024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Dungeons & Dragons', 'Fantasy', 'url_image_1'),
('Jane', 'Smith', 'janesmith', 'jane@example.com', 'hashedpassword2', '20/02/2024', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Pathfinder', 'Sci-fi', 'url_image_2');

-- Insérer des jeux de rôle
INSERT INTO jdrs (name)
VALUES
('The Fall of Hyrule'),
('Pathfinder');

-- Insérer des campagnes
INSERT INTO campaigns (name, status, id_jdr, id_mj, date_creation) 
VALUES 
('Adventure in the Forgotten Realms', 'Ongoing', 1, 1, '20/02/2024'),
('Space Exploration', 'Planned', 2, 2, '20/02/2024');

-- Insérer des personnages
INSERT INTO characters (is_favorite, name, image, id_campaign, date_creation, id_user) 
VALUES 
(TRUE, 'Gandalf', 'url_image_gandalf', 1, '20/02/2024', 1), -- John's character in Adventure in the Forgotten Realms
(FALSE, 'Legolas', 'url_image_legolas', 1, '20/02/2024', 1), -- John's character in Adventure in the Forgotten Realms
(TRUE, 'Ripley', 'url_image_ripley', 2, '20/02/2024', 2), -- Jane's character in Space Exploration
(FALSE, 'Han Solo', 'url_image_han_solo', 2, '20/02/2024', 2); -- Jane's character in Space Exploration
