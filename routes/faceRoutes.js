import express from 'express'
import { uploadImg } from '../utils/multer.js'
import {
  getMyFaces,
  getFaceById,
  deleteFace,
  createFace,
} from '../controllers/faceConroller.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(
  protect,
  uploadImg.fields([
    { name: 'images', maxCount: 8 },
    { name: 'video', maxCount: 1 },
  ]),
  createFace
)
router.route('/myFaces').get(protect, getMyFaces)
router.route('/:id').get(protect, getFaceById).delete(protect, deleteFace)

export default router

//  create
//  read (/single/all)
//  update (:id)
//  delete (:id)
