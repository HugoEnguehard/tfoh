import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import bcrypt from 'bcryptjs';

export const UserController = {
  signin: async (
    username: string, 
    password: string
  ) => {
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
  },
  signup: async (
    username: string, 
    password: string, 
    email: string
  ) => {
    try {
      // Check if email exists
      if(await UserService.findUserByEmail(email)) return -1;
      // Check if usernames exists
      if(await UserService.findUserByUsername(username)) return -2;
      // Generate creation date
      const currentDate = new Date().toLocaleDateString('fr-FR');
      // Hash password
      const hashedPassword = bcrypt.hashSync(password, 10);
      // Generate new user
      const newUser = await UserService.createNewUser(username, hashedPassword, email, currentDate);
      // Return new user
      return newUser;
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      throw new Error('Erreur lors de l\'inscription');
    }
  },
  edit: async (
    id: number,
    lastname: string, 
    firstname: string, 
    username: string, 
    email: string, 
    bio: string, 
    favorite_jdr: string, 
    preference: string
  ) => {
    try {
      // Check if user exists using id
      if(!await UserService.findUserById(id)) return -1;
      // Edit user
      const editedUser = UserService.editUser(id, lastname, firstname, username, email, bio, favorite_jdr, preference);

      return editedUser;
    } catch (error) {
      console.error('Erreur lors de l\'edit du user:', error);
      throw new Error('Erreur lors de l\'edit du user');
    }
  }
}