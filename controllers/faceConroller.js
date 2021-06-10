import asyncHandler from 'express-async-handler'
import Face from '../models/faceModel.js'
import { request } from 'express'

// @desc    Get logged in user's registered faces
// @route   GET /api/faces/myfaces
// @access  Private
export const getMyFaces = asyncHandler(async (req, res) => {
  const faces = await Face.find({ user: req.user._id })
  res.json(faces)
})

// @desc    Fetch person details
// @route   Get /api/faces/:id
// @access  Private
export const getFaceById = asyncHandler(async (req, res) => {
  const face = await Face.findById(req.params.id)

  if (face) {
    res.json(face)
  } else {
    res.status(404)
    throw new Error('Face not Found!')
  }
})

// @desc    Delete a person
// @route   DELETE /api/faces/:id
// @access  Private
export const deleteFace = asyncHandler(async (req, res) => {
  const face = await Face.findById(req.params.id)

  if (face) {
    await face.remove()
    res.json({ message: 'person succesfully deleted' })
  } else {
    res.status(404)
    throw new Error('invalid person id!')
  }
})

// @desc    Create a face
// @route   POST /api/faces
// @access  Private
export const createFace = asyncHandler(async (req, res) => {
  const { images, video, name, age, gender } = req.body
  const face = new Face({
    images,
    video,
    name,
    age,
    gender,
    user: req.user._id,
  })

  const createdFace = await face.save()
  res.status(201).json(createdFace)
})
