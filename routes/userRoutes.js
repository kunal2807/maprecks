import express from 'express'
import {
  createNewUser,
  authNewUser,
  updateUserProfile,
  authUser,
  createUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(createNewUser)
router.route('/license').post(authNewUser)
router.route('/login').post(authUser)
router.route('/create').put(createUserProfile)
router.route('/profile').put(protect, updateUserProfile)

export default router
