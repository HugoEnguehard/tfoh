import express from 'express';
import UserController from '../controllers/User.Controller';
import { verifyToken } from '../middlewares/middlewares';

const router = express.Router();

router.get("/me", verifyToken, UserController.getUser);
router.put("/profile", verifyToken, UserController.editUserProfile);
router.put("/account", verifyToken, UserController.editUserAccount);
router.put("/password", verifyToken, UserController.editUserPassword);

export default router;