import express, { Request, Response } from 'express';
import { CharacterController } from '../controllers/Character.Controller';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const { name, id_campaign, id_user } = req.body;
        const character = await CharacterController.create(name, id_campaign, id_user);
        
        res.status(200).json({ message: 'Création réussie', character});
    } catch (error) {
        console.error('Erreur lors de la création du personnage :', error);
        // if (error instanceof UserNotFoundError) res.status(404).json({ message: error.message });
        // else res.status(500).json({ message: 'Erreur lors de la création du personnage' });
    }
});

router.put('/', async (req: Request, res: Response) => {
    try {
        const { id, is_favorite, name } = req.body;
        const character = await CharacterController.edit(id, is_favorite, name);
        
        res.status(200).json({ message: 'Modification réussie', character});
    } catch (error) {
        console.error('Erreur lors de la modification du personnage :', error);
        // if (error instanceof CharacterNotFoundError) res.status(404).json({ message: error.message });
        // else res.status(500).json({ message: 'Erreur lors de la modification du personnage' });
    }
});

router.get('/unique', async (req: Request, res: Response) => {
    try {
        const { id } = req.query;
        const character = await CharacterController.getUnique(Number(id));

        res.status(200).json({ message: 'Personnage trouvé', character });
    } catch (error) {
        console.error('Erreur lors de la récupération du personnage :', error);
        // if (error instanceof CharacterNotFoundError) res.status(404).json({ message: error.message });
        // else res.status(500).json({ message: 'Erreur lors de la récupération du personnage' });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const { id_user } = req.query;
        
        const characters = await CharacterController.getFromUserId(Number(id_user));

        res.status(200).json({ message: 'Récupération réussie', characters});
    } catch (error) {
        console.error('Erreur lors de la récupération des personnages :', error);
        // if (error instanceof UserNotFoundError) res.status(404).json({ message: error.message });
        // else res.status(500).json({ message: 'Erreur lors de la récupération des personnages' });
    }
});

export default router;