import express from 'express' 
import createAppoitment from '../controllers/createAppoitment.js'

const router = express.Router();

router.post('/create',createAppoitment)

export default router