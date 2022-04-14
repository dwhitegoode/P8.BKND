import { Router } from "express";
import * as controllers from "../controllers/foods";

const router = Router()

router.get('/foods', controllers.getFood)

export default router;