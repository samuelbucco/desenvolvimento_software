import { Router } from "express";
import usersController from "../Controller/usersController";

const router = Router();

router.get('/users', usersController.users);

export default router;