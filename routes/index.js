import { Router } from "express";
//import res from "express/lib/response";
//import res from "express/lib/response";
import organRoutes from "./organs.js"
import foodRoutes from "./foods.js"

const router = Router()

//router.get('/', (req, res) => res.send('api root'))
router.get('/', (req, res) => res.send('api root'))

router.use('/', organRoutes)
router.use('/', foodRoutes)

export default router; 