import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserService from './User.service';

const authService = {
    async signIn(username: string, password: string) {
        try {
            const user = await UserService.getUserByUsername(username);

            if(!user) return { error: 'User not found', status: 404 }

            const isPasswordValid = bcrypt.compareSync(password, user.password);

            if(!isPasswordValid) return { error: 'Invalid password', status: 401 }

            const { password: _, ...userData } = user.toJSON();

            const token = jwt.sign({ user: userData }, process.env.JWT_SECRET || '', {
                expiresIn: '12h',
            });

            return { token, status: 200 }
        } catch (error) {
            console.error('Error in signIn:', error);
            throw error;
        }
    }
}

export default authService;