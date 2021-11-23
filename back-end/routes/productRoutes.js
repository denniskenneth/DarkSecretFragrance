import express from 'express';
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

const router = express.Router();

//PURPOSE:  FETCH ALL PRODUCT
// ROUTE: GET/api/products
// ACCESS: public
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
