import { Router } from "express";
import * as controllers from "../controllers/foods.js";

const router = Router()

router.get('/foods', controllers.getFood)
router.post('/foods/:organ', controllers.updateFood)

export default router;