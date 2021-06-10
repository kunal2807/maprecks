import asyncHandler from 'express-async-handler'
import Car from '../models/carModel.js'
import { request } from 'express'

// @desc    Get logged in user's registered car
// @route   GET /api/cars/mycars
// @access  Private
export const getMyCars = asyncHandler(async (req, res) => {
  const cars = await Car.find({ user: req.user._id })
  res.json(cars)
})

// @desc    Fetch car details
// @route   Get /api/cars/:id
// @access  Private
export const getCarById = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id)

  if (car) {
    res.json(car)
  } else {
    res.status(404)
    throw new Error('Car not Found!')
  }
})

// @desc    Delete a car
// @route   DELETE /api/cars/:id
// @access  Private
export const deleteCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id)

  if (car) {
    await car.remove()
    res.json({ message: 'car succesfully deleted' })
  } else {
    res.status(404)
    throw new Error('invalid car id!')
  }
})

// @desc    Create a car
// @route   POST /api/cars
// @access  Private
export const createCar = asyncHandler(async (req, res) => {
  const { licenseNumber } = req.body
  const car = new Car({
    licenseNumber,
    user: req.user._id,
  })

  const createdCar = await car.save()
  res.status(201).json(createdCar)
})
