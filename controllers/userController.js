import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Register Brand new user by admins
// @route   POST /api/users
// @access  Private (admins only)
export const createNewUser = asyncHandler(async (req, res) => {
  const { userId, licenseCode } = req.body

  const userIdExists = await User.findOne({ userId })
  const licenseCodeExists = await User.findOne({ licenseCode })

  if (userIdExists || licenseCodeExists) {
    res.status(400)
    throw new Error('User Id or license code already exists')
  }

  const user = await User.create({
    userId,
    licenseCode,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      userId: user.userId,
      licenseCode: user.licenseCode,
      admin: user.admin,
    })
  } else {
    res.status(400)
    throw new Error('User Id or license code already exists')
  }
})

// @desc    Auth userId & licenseCode
// @route   POST /api/users/license
// @access  Public
export const authNewUser = asyncHandler(async (req, res) => {
  const { userId, licenseCode } = req.body

  const user = await User.findOne({ userId })

  if (!user || (user && user.licenseCode !== licenseCode)) {
    res.status(401)
    throw new Error('User ID or license code is inavlid')
  }

  if (user.registered) {
    res.status(401)
    throw new Error('User already registered')
  }

  res.json({
    _id: user._id,
    userId: user.userId,
    licenseCode: user.licenseCode,
    admin: user.admin,
    registered: user.registered,
  })
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.user._id)
  const { name, password, idProof, contactNumber, address } = req.body

  if (user) {
    user.name = name || user.name
    user.idProof = idProof || user.idProof
    user.address = address || user.address
    user.registered = true
    if (password) {
      user.password = password
    }
    if (contactNumber) {
      user.contactNumber = contactNumber
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      userId: updatedUser.userId,
      licenseCode: updatedUser.licenseCode,
      name: updatedUser.name,
      admin: updatedUser.isAdmin,
      idProof: updatedUser.idProof,
      contactNumber: updatedUser.contactNumber,
      address: updatedUser.address,
    })
  } else {
    res.status(404)
    throw new Error('User id not found')
  }
})

// @desc    Create user profile
// @route   PUT /api/users/create
// @access  Public
export const createUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.user._id)
  console.log(user)
  if (
    user.userId !== req.body.user.userId ||
    user.licenseCode !== req.body.user.licenseCode
  ) {
    res.status(401)
    throw new Error('User id or licese code invalid')
  }
  if (user && user.registered) {
    res.status(401)
    throw new Error('User already registered')
  }

  const { name, password, idProof, contactNumber, address } = req.body

  //include idProof image later on
  if (!name || !password || !contactNumber || !address) {
    res.status(404)
    throw new Error('all fields are required for new user')
  }

  if (user) {
    const token = generateToken(user._id)
    user.name = name || user.name
    user.idProof = idProof || user.idProof
    user.address = address || user.address
    user.registered = true
    if (password) {
      user.password = password
    }
    if (contactNumber) {
      user.contactNumber = contactNumber
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      userId: updatedUser.userId,
      licenseCode: updatedUser.licenseCode,
      name: updatedUser.name,
      admin: updatedUser.isAdmin,
      idProof: updatedUser.idProof,
      contactNumber: updatedUser.contactNumber,
      address: updatedUser.address,

      token,
    })
  } else {
    res.status(404)
    throw new Error('User id not found')
  }
})

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  const { userId, password } = req.body

  const user = await User.findOne({ userId })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      userId: user.userId,
      licenseCode: user.licenseCode,
      name: user.name,
      admin: user.isAdmin,
      idProof: user.idProof,
      contactNumber: user.contactNumber,
      address: user.address,

      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid userId or password')
  }
})
