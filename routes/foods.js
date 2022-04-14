import { Router } from "express";
import * as controllers from "../controllers/foods.js";

const router = Router()

router.get('/foods', controllers.getFood)

export default router;