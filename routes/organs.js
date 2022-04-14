import { Router } from "express"
import * as controllers from "../controllers/organs.js"

const router = Router()

router.get('/organs', controllers.getOrgans)
router.get()
router.post()
router.put()
router.delete()

export default router;