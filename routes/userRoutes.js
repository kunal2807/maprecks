import express from 'express'
import {
  createNewUser,
  verifyNewUser,
  updateUserProfile,
  authUser,
  createUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(createNewUser)
router.route('/verify').post(verifyNewUser)
router.route('/login').post(authUser)
router.route('/create').put(createUserProfile)
router.route('/profile').put(protect, updateUserProfile)

export default router
