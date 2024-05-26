import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies['Authorization'];

    if(!token) return res.status(401).json({ error: 'Unauthorized: No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '');

        (req as any).user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
}