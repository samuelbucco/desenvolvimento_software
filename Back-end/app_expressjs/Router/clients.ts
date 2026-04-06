import { Router } from 'express';
import clientsController from '../Controller/clientsController';

const router = Router();

router.get('/', clientsController.index) 

router.get('/users', clientsController.users);

router.get('/products', clientsController.products);

router.get('/orders', clientsController.orders);

export default router;