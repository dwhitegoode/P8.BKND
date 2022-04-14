import { Router } from "express";
import res from "express/lib/response";
import organRoutes from "./organs.js"

const router = Router()

router.get('/', (req, res) => {
  res.send('api root')
})

router.use('/', organRoutes)

export default router;