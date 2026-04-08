import { Router } from "express";
import ordersController from "../Controller/ordersController";

const router = Router();

router.get('/orders', ordersController.orders);

export default router;