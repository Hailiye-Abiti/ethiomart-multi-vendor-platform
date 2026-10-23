import Product from '../models/Product.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Unable to fetch products' });
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Private/Seller
export const createProduct = async (req, res) => {
  try {
    const { name, price, category, region, description, image } = req.body;

    const product = new Product({
      name,
      price,
      category,
      region,
      description,
      image,
      seller: req.user?._id
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: 'Invalid product data provided' });
  }
};
