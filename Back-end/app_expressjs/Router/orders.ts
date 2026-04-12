import { Router } from "express";
import ordersController from "../Controller/ordersController";

const router = Router();

router.get('/', ordersController.index);

export default router;