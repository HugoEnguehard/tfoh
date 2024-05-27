import User from "../models/User";

class UserService {
    async getAllUsers(): Promise<User[]> {
        return await User.findAll();
    }

    async getUserById(userId: string): Promise<User | null> {
        return await User.findByPk(userId);
    }

    async getUserByEmail(userEmail: string): Promise<User | null> {
        return await User.findOne({ where: { email: userEmail.toLowerCase()} })
    }

    async getUserByUsername(username: string): Promise<User | null> {
        return await User.findOne({ where: { username: username.toLowerCase()} })
    }

    async createUser(email: string, password: string, username: string, currentDate: string): Promise<User> {
        return await User.create({ email: email, password: password, username: username, date_creation: currentDate })
    }

    async editUser(user: User): Promise<User> {
        const existingUser = await User.findByPk(user.id);
        if (!existingUser) throw new Error('User not found');

        Object.assign(existingUser, user);
        return await existingUser.save();
    }
}

export default new UserService();