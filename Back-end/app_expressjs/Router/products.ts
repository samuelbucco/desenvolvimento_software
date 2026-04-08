import { Router } from "express";
import productsController from "../Controller/productsController";

const router = Router();

router.get('/products', productsController.products);

export default router;