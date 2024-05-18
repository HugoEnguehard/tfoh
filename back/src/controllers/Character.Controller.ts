import { CharacterServices } from "../services/Character.service";
import UserServices from "../services/User.service";

export const CharacterController = {
    create: async (
        name: string,
        id_campaign: number,
        id_user: number,
    ) => {
        try {
            // Check parameters
            if (!name || !id_campaign || !id_user) throw new Error('Données invalides : nom, id_campaign et id_user sont obligatoires');
            // Check if user exists
            // if(!await UserServices.findUserById(id_user)) throw new UserNotFoundError('Utilisateur inconnu');
            // Generate creation date
            const currentDate = new Date().toLocaleDateString('fr-FR');
            // Generate new user
            const newCharacter = await CharacterServices.createCharacter(name, id_campaign, id_user, currentDate);
            // Return new user
            // if(newCharacter) return newCharacter;
            // else throw new Error("Erreur lors de la création du personnage")
        } catch (error) {
            throw error;
        }
    },
    edit: async (
        id: number,
        is_favorite: boolean,
        name: string,
    ) => {
        try {
            if (!id || !name) throw new Error('Données invalides : id, is_favorite et name sont obligatoires');
            // if(!await CharacterServices.findCharacterById(id)) throw new CharacterNotFoundError('Personnage inconnu');

            const editedCharacter = await CharacterServices.editCharacter(id, is_favorite, name);
            return editedCharacter;
        } catch (error) {
            throw error;
        }
    },
    getUnique: async (
        id: number,
    ) => {
        try {
            if(!id) throw new Error('Données invalides : id est obligatoire');
            const character = await CharacterServices.findCharacterById(id);
            return character;
        } catch (error) {
            throw error;
        }
    },
    getFromUserId: async (
        id_user: number,
    ) => {
        try {
            if(!id_user) throw new Error('Données invalides : id est obligatoire');
            // if(!await UserServices.findUserById(id_user)) throw new UserNotFoundError('Utilisateur inconnu');
            const characters = await CharacterServices.findCharacterByUserId(id_user);
            return characters;
        } catch (error) {
            throw error;
        }
    }
}