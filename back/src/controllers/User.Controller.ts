import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import User from "../models/User";
import UserService from "../services/User.service";
import { CheckEmail, CheckPassword } from "../utils/formChecks";
import bcrypt from 'bcrypt';

class UserController {
    async getUser (req: Request, res: Response) {
        try {
            const decodedUser = (jwt.verify(req.cookies['Authorization'], process.env.JWT_SECRET || '') as any).user as User;

            const userData = await UserService.getUserById(decodedUser.id.toString());

            if (!userData) return res.status(400).json({ message: 'Unknown user' });

            return res.status(200).json({ message: "Utilisateur trouvé", user: userData });
        } catch (error: any) {
            console.log(error.message)
            return res.status(500).json({ error: 'Internal Server Error'});
        }
    }

    async editUserProfile(req: Request, res: Response) {
        try {
            const decodedUser = (jwt.verify(req.cookies['Authorization'], process.env.JWT_SECRET || '') as any).user as User;
            const { bio, favorite_jdr } = req.body;

            if((bio === undefined) || (favorite_jdr === undefined)) return res.status(400).json({ message: 'You must provide bio and favorite_jdr attributes' });

            const currentUser = await UserService.getUserById(decodedUser.id.toString());
            if (!currentUser) return res.status(401).json({ message: 'Unknown user' });

            currentUser.bio = bio;
            currentUser.favorite_jdr = favorite_jdr;

            const editedUser = await UserService.editUser(currentUser);
            const { password, ...userWithoutPassword } = editedUser.dataValues;
            res.status(200).json({ message: "User updated successfully", user: userWithoutPassword });
        } catch (error: any) {
            console.log(error.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async editUserAccount(req: Request, res: Response) {
        try {
            const decodedUser = (jwt.verify(req.cookies['Authorization'], process.env.JWT_SECRET || '') as any).user as User;
            const { firstname, lastname, username, email, preference } = req.body;

            if(firstname === undefined || lastname === undefined || username === undefined || email === undefined || preference === undefined) return res.status(400).json({ message: 'You must provide all attributes' });

            if(!CheckEmail(email)) return res.status(401).json({ message: 'The email is not at the correct format'});

            const userWithEmail = await UserService.getUserByEmail(email);
            if(userWithEmail && userWithEmail.id !== decodedUser.id) return res.status(402).json({ message: 'Email already taken' });

            const userWithUsername = await UserService.getUserByUsername(username);
            if(userWithUsername && userWithUsername.id !== decodedUser.id) return res.status(403).json({ message: 'Username already taken' });

            const currentUser = await UserService.getUserById(decodedUser.id.toString());
            if (!currentUser) return res.status(404).json({ message: 'Unknown user' });

            currentUser.firstname = firstname;
            currentUser.lastname = lastname;
            currentUser.username = username;
            currentUser.email = email;
            currentUser.preference = preference;

            const editedUser = await UserService.editUser(currentUser);
            const { password, ...userWithoutPassword } = editedUser.dataValues;
            res.status(200).json({ message: "User updated successfully", user: userWithoutPassword });
        } catch (error: any) {
            console.log(error.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async editUserPassword(req: Request, res: Response) {
        try {
            const decodedUser = (jwt.verify(req.cookies['Authorization'], process.env.JWT_SECRET || '') as any).user as User;
            const { oldPassword, newPassword } = req.body;

            if(oldPassword === undefined || newPassword === undefined) return res.status(400).json({ message: 'You must provide all attributes' });

            const currentUser = await UserService.getUserById(decodedUser.id.toString());
            if (!currentUser) return res.status(401).json({ message: 'Unknown user' });

            if(!bcrypt.compareSync(oldPassword, currentUser.password)) return res.status(402).json({ message: 'Wrong old password' });

            if(!CheckPassword(newPassword)) return res.status(403).json({ message: 'The new password must fulfill all security\'s criteria' });

            currentUser.password = bcrypt.hashSync(newPassword, 10);

            const editedUser = await UserService.editUser(currentUser);
            const { password, ...userWithoutPassword } = editedUser.dataValues;
            res.status(200).json({ message: "Password updated successfully", user: userWithoutPassword });
        } catch (error: any) {
            
        }
    }
}

export default new UserController();