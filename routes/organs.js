import { Router } from "express";
import * as controllers from "../controllers/organs.js";

const router = Router()

router.get('/organs', controllers.getOrgans)
router.get('/organs/:organ', controllers.getOrgan)
router.post('/organs', controllers.addOrgan)
router.put('/organs/:id', controllers.updateOrgan)
router.delete('/organs/:id', controllers.deleteOrgan)

export default router;