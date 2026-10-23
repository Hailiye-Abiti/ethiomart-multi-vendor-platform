import express from 'express';
import { getProducts, createProduct } from '../controllers/productController.js';

const router = express.Router();

// GET all products & POST new product
router.route('/')
  .get(getProducts)
  .post(createProduct);

export default router;
