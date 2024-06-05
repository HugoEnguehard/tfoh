import express from 'express';
import { verifyToken } from '../middlewares/middlewares';
import CampaignController from '../controllers/Campaign.controller';

const router = express.Router();

router.get("/", verifyToken, CampaignController.getUserCampaigns);
router.post("/", verifyToken, CampaignController.createCampaign);
router.get("/jdrs", verifyToken, CampaignController.getCampaignTypes);

export default router;