import { createPool, Pool } from 'mysql2/promise';

// Configurer les paramètres de connexion à la base de données
const pool: Pool = createPool({
    host: 'localhost',  // Adresse de la base de données
    user: 'root', // Nom d'utilisateur de la base de données
    password: '', // Mot de passe de la base de données
    database: 'tfoh', // Nom de la base de données
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export { pool };