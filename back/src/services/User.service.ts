import User from "../models/User";

class UserService {
    async getAllUsers() {
        return await User.findAll();
    }

    async getUserById(userId: string) {
        return await User.findByPk(userId);
    }

    async getUserByEmail(userEmail: string) {
        return await User.findOne({ where: { email: userEmail.toLowerCase()} })
    }

    async getUserByUsername(username: string) {
        return await User.findOne({ where: { username: username.toLowerCase()} })
    }

    async createUser(email: string, password: string, username: string, currentDate: string) {
        return await User.create({ email: email.toLowerCase(), password: password, username: username.toLowerCase(), date_creation: currentDate })
    }
}

export default new UserService();