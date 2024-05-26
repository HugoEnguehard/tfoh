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
        return await User.create({ email: email, password: password, username: username, date_creation: currentDate })
    }

    async editUser(user: User) {
        const existingUser = await User.findByPk(user.id);
        if (!existingUser) throw new Error('User not found');

        Object.assign(existingUser, user);
        return await existingUser.save();
    }
}

export default new UserService();