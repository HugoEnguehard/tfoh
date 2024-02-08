import { User } from '../models/userModel';
import { pool } from '../database';
import bcrypt from 'bcryptjs';

export const UserService = {
    findUserByUsernameAndPassword: async (username: string, password: string): Promise<User | null> => {
        try {
            const [rows] = await pool.query(`SELECT * FROM users WHERE UPPER(username) = ?`, [username.toUpperCase()]);

            if (Array.isArray(rows) && rows.length > 0) {
                const userData = rows[0] as User;
                const passwordMatch = await bcrypt.compare(password, userData.password);
                if (passwordMatch) {
                    return userData;
                } else {
                    return null; // Mot de passe incorrect
                }
            } else {
                return null;
            }
        } catch (error) {
            console.error('Erreur lors de la recherche de l\'utilisateur :', error);
            throw new Error('Erreur lors de la recherche de l\'utilisateur');
        }
    }
}