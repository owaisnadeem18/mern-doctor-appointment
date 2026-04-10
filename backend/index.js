import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './utils/connectDB.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectDB()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 

