import express from 'express';
import UserController from '../controllers/User.Controller';
import { verifyToken } from '../middlewares/middlewares';

const router = express.Router();

router.get("/me", verifyToken, UserController.getUser)

export default router;