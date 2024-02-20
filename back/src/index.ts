import express from 'express';
import { pool } from './database';
import userRoutes from './routes/userRoutes';
import characterRoutes from './routes/characterRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3080;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());
app.use(cors());

// Utilisation du routeur userRoutes
app.use('/api/users', userRoutes);
app.use('/api/characters', characterRoutes);

// Connexion à la base de données
pool.getConnection()
  .then(connection => {
    console.log('Connexion à la base de données réussie');
    connection.release();
    // Lancement du serveur
    app.listen(PORT, () => {
      console.log(`Serveur en écoute sur le port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Erreur lors de la connexion à la base de données :', error);
  });
