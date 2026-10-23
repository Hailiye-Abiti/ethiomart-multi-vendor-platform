import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('EthioMart API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
