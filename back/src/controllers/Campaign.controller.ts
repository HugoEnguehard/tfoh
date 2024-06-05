import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import User from "../models/User";
import UserService from "../services/User.service";
import CampaignService from "../services/Campaign.service";
import moment from "moment";

class CampaignController {
    async getUserCampaigns (req: Request, res: Response) {
        try {
            const decodedUser = (jwt.verify(req.cookies['Authorization'], process.env.JWT_SECRET || '') as any).user as User;

            const userData = await UserService.getUserById(decodedUser.id.toString());

            if (!userData) return res.status(400).json({ message: 'Unknown user' });

            const userCampaignsList = await CampaignService.getCampaignsByMJ(userData.id.toString());

            return res.status(200).json({ message: "Utilisateur trouvé", campaigns: userCampaignsList });
        } catch (error: any) {
            console.log(error.message)
            return res.status(500).json({ error: 'Internal Server Error'});
        }
    }

    async getCampaignTypes (req: Request, res: Response) {
        try {
            const decodedUser = (jwt.verify(req.cookies['Authorization'], process.env.JWT_SECRET || '') as any).user as User;

            const userData = await UserService.getUserById(decodedUser.id.toString());

            if (!userData) return res.status(400).json({ message: 'Unknown user' });

            const jdrList = await CampaignService.getAllJdr();

            return res.status(200).json({ message: "Utilisateur trouvé", jdrList: jdrList });
        } catch (error: any) {
            console.log(error.message)
            return res.status(500).json({ error: 'Internal Server Error'});
        }
    }

    async createCampaign (req: Request, res: Response) {
        try {
            const { jdr, name } = req.body;
    
            if(!jdr || !name) return res.status(400).json({ error: 'Jdr id and name are required' });

            const decodedUser = (jwt.verify(req.cookies['Authorization'], process.env.JWT_SECRET || '') as any).user as User;

            const userData = await UserService.getUserById(decodedUser.id.toString());

            if (!userData) return res.status(400).json({ message: 'Unknown user' });

            const currentJdr = await CampaignService.getJdrById(jdr);

            if(!currentJdr) return res.status(401).json({ message: 'Unknown Jdr' });

            const currentDate = moment().format("DD/MM/YYYY");
            
            const newCampaign = await CampaignService.createCampaign(name, jdr, decodedUser.id.toString(), currentDate);

            if(!newCampaign) return res.status(402).json({ message: 'An error occured when creating the campaign' });

            return res.status(200).json({ message: "Campagne créée" });
        } catch (error: any) {
            console.log(error.message)
            return res.status(500).json({ error: 'Internal Server Error'});
        }
    }
}

export default new CampaignController();