import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export const UserController = {
  signin: async (username: string, password: string) => {
    try {
      const user = await UserService.findUserByUsernameAndPassword(username, password);
      if (user) {
        return user;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      throw new Error('Erreur lors de la connexion');
    }
  }
}