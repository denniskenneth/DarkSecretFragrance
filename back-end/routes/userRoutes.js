import express from 'express';

const router = express.Router();

import { authUser } from '../controllers/userController.js';

//PURPOSE:  FETCH ALL PRODUCT
// ROUTE: GET/api/products
// ACCESS: public
router.post('/login', authUser);

export default router;
