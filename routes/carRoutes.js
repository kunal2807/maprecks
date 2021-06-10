import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
  createCar,
  getMyCars,
  getCarById,
  deleteCar,
} from '../controllers/carController.js'
const router = express.Router()

router.route('/').post(protect, createCar)
router.route('/mycar').get(protect, getCarById)
router.route('/:id').get(protect, getMyCars).delete(protect, deleteCar)

export default router

//  create
//  read (/single/all)
//  update (:id)
//  delete (:id)
