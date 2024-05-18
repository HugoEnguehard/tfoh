import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/Auth.routes';
import userRoutes from './routes/User.routes';
import characterRoutes from './routes/Character.routes';

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3080;

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/characters', characterRoutes);

app.listen(PORT, () => {
  console.log(`API started on http://localhost:${PORT}/api/`);
});
