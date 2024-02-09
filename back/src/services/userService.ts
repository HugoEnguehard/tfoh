import { User } from '../models/userModel';
import { pool } from '../database';
import bcrypt from 'bcryptjs';
import { ResultSetHeader } from 'mysql2';

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
            console.error('Erreur lors de la recherche de l\'utilisateur via username et password :', error);
            throw new Error('Erreur lors de la recherche de l\'utilisateur via username et password');
        }
    },
    findUserByEmail: async (email: string): Promise<User | null> => {
        try {
            const [rows] = await pool.query(`SELECT * from users WHERE UPPER(email) = ?`, [email]);

            if(Array.isArray(rows) && rows.length > 0) return rows[0] as User;
            else return null;
        } catch (error) {
            console.error('Erreur lors de la recherche de l\'utilisateur via email :', error);
            throw new Error('Erreur lors de la recherche de l\'utilisateur via email');
        }
    },
    findUserByUsername: async (username: string): Promise<User | null> => {
        try {
            const [rows] = await pool.query(`SELECT * from users WHERE UPPER(username) = ?`, [username]);

            if(Array.isArray(rows) && rows.length > 0) return rows[0] as User;
            else return null;
        } catch (error) {
            console.error('Erreur lors de la recherche de l\'utilisateur via username : ', error);
            throw new Error('Erreur lors de la recherche de l\'utilisateur via username');
        }
    },
    findUserById: async (id: number): Promise<User | null> => {
        try {                        
            const [rows] = await pool.query(`SELECT * from users WHERE id = ?`, [id]);

            if(Array.isArray(rows) && rows.length > 0) return rows[0] as User;
            else return null;
        } catch (error) {
            console.error('Erreur lors de la recherche de l\'utilisateur via id :', error);
            throw new Error('Erreur lors de la recherche de l\'utilisateur via id');
        }
    },
    createNewUser: async (username: string, password: string, email: string, dateCreation: string): Promise<User | null> => {
        try {
            const [result] = await pool.execute<ResultSetHeader>('INSERT INTO users (username, email, password, date_creation) VALUES (?, ?, ?, ?)', [username, email, password, dateCreation]);

            if (result.affectedRows === 1) {
                const newUser = await UserService.findUserByEmail(email);
                if(newUser) return newUser;
                else throw Error("Une erreur s'est produite lors de la récupération du nouvel utilisateur")
            } 
            else return null;
        } catch (error) {
            console.error('Erreur lors de l\'ajout du nouvel utilisateur', error);
            throw new Error('Erreur lors de l\'ajout du nouvel utilisateur');
        }
    },
    editUser: async (    
        id: number,
        lastname: string, 
        firstname: string, 
        username: string, 
        email: string, 
        bio: string, 
        favorite_jdr: string, 
        preference: string
    ): Promise<User | null> => {
        try {
            const [result] = await pool.execute<ResultSetHeader>('UPDATE users SET firstname = ?, lastname = ?, username = ?, email = ?, bio = ?, favorite_jdr = ?, preference = ? WHERE id = ?', [firstname, lastname, username, email, bio, favorite_jdr, preference, id]);

            if (result.affectedRows === 1) {
                const editedUser = await UserService.findUserById(id);
                if (editedUser) return editedUser;
                else throw Error("Une erreur s'est produite lors de la récupération de l'utilisateur modifié");
            } else return null;
        } catch (error) {
            console.error('Erreur lors de la modification de l\'utilisateur :', error);
            throw new Error('Erreur lors de la modification de l\'utilisateur')
        }
    }
}