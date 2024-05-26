import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import User from "../models/User";
import UserService from "../services/User.service";

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

            const user = await UserService.getUserById(decodedUser.id.toString());
            if (!user) return res.status(401).json({ message: 'Unknown user' });

            user.bio = bio;
            user.favorite_jdr = favorite_jdr;

            const editResult = await UserService.editUser(user);
            res.status(200).json({ message: "User updated successfully", user: editResult });
        } catch (error: any) {
            console.log(error.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default new UserController();