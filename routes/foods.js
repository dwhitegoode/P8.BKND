import { Router } from "express";
import * as controllers from "../controllers/foods.js";

const router = Router()

router.get('/foods', controllers.getFood)
router.get('/foods/:organ', controllers.getSpecFood)
router.put('/foods/:id', controllers.updateFood)

export default router;