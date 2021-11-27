import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

//PURPOSE:  FETCH ALL PRODUCT
// ROUTE: GET/api/products
// ACCESS: public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//PURPOSE:  FETCH SINGLE PRODUCT
// ROUTE: GET/api/products/:id
// ACCESS: public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// PURPOSE:   Delete a product
// ROUTE:   DELETE /api/products/:id
// ACCESS:  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product deleted' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProductById, getProducts, deleteProduct };
