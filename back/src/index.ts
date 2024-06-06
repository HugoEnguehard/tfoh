import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

import authRoutes from './routes/Auth.routes';
import userRoutes from './routes/User.routes';
// import characterRoutes from './routes/Character.routes';
import campaignRoutes from './routes/Campaign.routes';

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3080;
const corsOptions = {
  origin: 'http://localhost',
  credentials: true,
}

const userImagesPath = path.resolve(__dirname, 'user-images/pp');

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

app.use('/user-images/pp', express.static(userImagesPath));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/campaigns', campaignRoutes);
// app.use('/api/characters', characterRoutes);

app.listen(PORT, () => {
  console.log(`API started on http://localhost:${PORT}/api/`);
});
