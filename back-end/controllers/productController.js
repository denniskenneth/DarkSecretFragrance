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

export { getProductById, getProducts };