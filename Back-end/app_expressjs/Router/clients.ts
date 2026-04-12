import { Router } from 'express';
import clientsController from '../Controller/clientsController';

const router = Router();

router.get('/', clientsController.index);

router.get('/create', clientsController.create);

router.post('/create', clientsController.store);

router.post('/edit/:id', clientsController.update);

router.get('/edit/:id', clientsController.edit);

router.get('/del/:id', clientsController.del);

router.get('/:id', clientsController.show);

export default router;