import express, { Request, Response } from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();

router.post('/signin', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await UserController.signin(username, password);
        if(user) res.status(200).json({ message: 'Connexion réussie', user});
        else res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect');
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        res.status(500).json({ message: 'Erreur lors de la connexion' });
    }
});

router.post('/signup', async (req: Request, res: Response) => {
    try {
        const { username, password, email } = req.body;
        const newUser = await UserController.signup(username, password, email);

        if (newUser === -1) res.status(401).send('Email déjà utilisée');
        else if (newUser === -2) res.status(402).send('Nom d\'utilisateur déjà utilisé');
        else if (newUser === null) res.status(403).send('Une erreur est survenue lors de la création du compte');
        else res.status(200).json({ message: 'Utilisateur crée', user: newUser });
    } catch (error) {
        console.error("Erreur lors de l\'inscription", error);
        res.status(500).json({ message: "Erreur lors de l\'inscription" });
    }
});

export default router;