import User from "../models/User";

export const CharacterServices = {
    createCharacter: async (
        name: string,
        id_campaign: number,
        id_user: number,
        date_creation: string,
    ) => {
        // try {
        //     const [result] = await pool.execute<ResultSetHeader>('INSERT INTO characters (is_favorite, name, id_campaign, date_creation, id_user) VALUES (?, ?, ?, ?, ?)', [false, name, id_campaign, date_creation, id_user]);

        //     if (result.affectedRows === 1) {
        //         const insertedId = result.insertId;
        //         const newCharacter = await CharacterServices.findCharacterById(insertedId);
        //         return newCharacter;
        //     } 
        //     else throw new Error('Requête BDD échouée');
        // } catch (error) {
        //     throw new Error('Erreur lors de l\'ajout du nouvel utilisateur');
        // }
    },
    findCharacterById: async (
        id: number,
    ) => {
        // try {
        //     const [rows] = await pool.execute<RowDataPacket[]>(`SELECT * FROM characters WHERE id = ? `, [id]);
        //     if(Array.isArray(rows) && rows.length > 0) return rows[0] as Character;
        //     else return null;
        // } catch (error) {
        //     throw error;
        // }
    },
    editCharacter: async (
        id: number,
        is_favorite: boolean,
        name: string,
    ) => {
        // try {
        //     const [result] = await pool.execute<ResultSetHeader>('UPDATE characters SET is_favorite = ?, name = ? WHERE id = ?', [is_favorite, name, id]);

        //     if (result.affectedRows === 1) {
        //         const editedCharacter = await CharacterServices.findCharacterById(id);
        //         return editedCharacter;
        //     } 
        //     else throw new Error('Requête BDD échouée');
        // } catch (error) {
        //     throw error;
        // }
    },
    findCharacterByUserId: async (
        id_user: number,
    ) => {
        // try {
        //     const [rows] = await pool.execute<RowDataPacket[]>(`SELECT * FROM characters WHERE id_user = ? `, [id_user]);
            
        //     return rows as Character[];
        // } catch (error) {
        //     throw error;
        // }
    }

}