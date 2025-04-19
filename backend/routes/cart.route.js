import express from 'express';
import { addToCart, getCart } from '../controller/cart.controller.js';
import { authenticate } from '../middleware/cart.middleware.js';

const router = express.Router();

router.get('/', authenticate, getCart);
router.post('/', authenticate, addToCart);

export default router;
