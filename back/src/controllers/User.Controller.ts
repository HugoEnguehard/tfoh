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
            return res.status(500).json({ error: 'Internal Server Error'});
        }
    }
}

export default new UserController();