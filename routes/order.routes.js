import { Router } from 'express';
import { OrderController } from '../controllers/order.controller.js';

const router = Router();

router.post('/', OrderController.createOrder);

export default router;
