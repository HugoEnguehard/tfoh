import express from 'express';
import AuthController from '../controllers/Auth.controller';
import { verifyToken } from '../middlewares/middlewares';

const router = express.Router();

router.post("/signin", AuthController.signIn);
router.post("/signup", AuthController.signUp);
router.post("/logout", verifyToken, AuthController.logout);

export default router;