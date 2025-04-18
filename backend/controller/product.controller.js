import Product from '../model/product.model.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();  // Fetch all products from the DB
    if (!products.length) {
      return res.status(404).json({ message: 'No products found' });
    }
    res.status(200).json(products);  // Send products back as JSON
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
};
