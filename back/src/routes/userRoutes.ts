import express, { Request, Response } from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();

router.post('/signin', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await UserController.signin(username, password);
        if(user)  res.status(200).json({ message: 'Connexion réussie', user});
        else res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect');
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        res.status(500).json({ message: 'Erreur lors de la connexion' });
    }
})

export default router;