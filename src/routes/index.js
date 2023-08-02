import express from "express"
import appointmentRoute from "./appoitmentRoute.js"

const router = express.Router();

router.use('/appointment',appointmentRoute)

export default router;