import { Request, Response } from "express";
import AuthService from "../services/Auth.service";
import UserService from "../services/User.service";
import moment from 'moment';
import bcrypt from 'bcrypt';

class AuthController {
    async signIn(req: Request, res: Response) {
        try {
            const { username, password } = req.body;

            if(!username || !password) return res.status(400).json({ error: 'Username and password are required' });

            const { token, error, status } = await AuthService.signIn(username, password);

            if(status !== 200) return res.status(status).json({ message: error });

            res.cookie('Authorized', token, {
                maxAge: 1 * 60 * 60 * 1000, // 1 hour
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production'
            });
        
            return res.status(200).json({ message: 'Signin successful' });
        } catch (error: any) {
            return res.status(500).json({ error: 'Internal Server Error'});
        }
    }

    async signUp(req: Request, res: Response) {
        try {
          const { email, password, username } = req.body;
    
          if(!email || !password || !username ) return res.status(400).json({ error: "Missing email, password, username or securityKey" });
    
          if(await UserService.getUserByUsername(username) !== null) return res.status(402).json({ error: "Username already taken" })
    
          if(await UserService.getUserByEmail(email) !== null) return res.status(403).json({ error: "Email already taken" })

          const currentDate = moment().format("DD/MM/YYYY");
          const hashedPassword = bcrypt.hashSync(password, 10);

          await UserService.createUser(email, hashedPassword, username, currentDate)
    
          res.status(200).json({ message: "User created" })
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
    
      async logout(req: Request, res: Response) {
        try {
          res.clearCookie('Authorized');
          res.status(200).json({ message: 'Logout successful' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default new AuthController();