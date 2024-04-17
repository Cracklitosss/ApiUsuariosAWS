import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import './user/domain/User';
import './user/domain/SensorData';

import userRoutes from './user/infrastructure/UserRoutes';
const app = express();

// Conexión a MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Carlos:12345@cluster0.ha8qnnw.mongodb.net/Pruebamulti';
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});