import { UserServices } from '../services/userService';
import bcrypt from 'bcryptjs';

export const UserController = {
  signin: async (
    username: string, 
    password: string,
  ) => {
    try {
      const user = await UserServices.findUserByUsernameAndPassword(username, password);
      if (user)  return user;
      else return null;
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      throw new Error('Erreur lors de la connexion');
    }
  },
  signup: async (
    username: string, 
    password: string, 
    email: string,
  ) => {
    try {
      // Check if email exists
      if(await UserServices.findUserByEmail(email)) return -1;
      // Check if usernames exists
      if(await UserServices.findUserByUsername(username)) return -2;
      // Generate creation date
      const currentDate = new Date().toLocaleDateString('fr-FR');
      // Hash password
      const hashedPassword = bcrypt.hashSync(password, 10);
      // Generate new user
      const newUser = await UserServices.createNewUser(username, hashedPassword, email, currentDate);
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
    preference: string,
  ) => {
    try {
      // Check if user exists using id
      if(!await UserServices.findUserById(id)) return -1;
      // Edit user
      const editedUser = UserServices.editUser(id, lastname, firstname, username, email, bio, favorite_jdr, preference);

      return editedUser;
    } catch (error) {
      console.error('Erreur lors de l\'edit du user:', error);
      throw new Error('Erreur lors de l\'edit du user');
    }
  },
  changePassword: async (
    id: number,
    oldPassword: string, 
    newPassword: string,
  ) => {
    try {
      // Check if user exists
      if(!await UserServices.findUserById(id)) return -1;
      // Check if old password is correct
      if(!await UserServices.checkPassword(id, oldPassword)) return -2;
      // Change user password to new password
      return UserServices.changePassword(id, newPassword);  
    } catch (error) {
      console.error('Erreur lors du changement du mot de passe :', error);
      throw new Error('Erreur lors du changement du mot de passe');
    }
  }
}