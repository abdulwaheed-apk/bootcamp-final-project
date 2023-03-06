const express = require('express')
const asyncHandler = require('express-async-handler')
const Exercise = require('../models/exerciseModel')
const { validationResult } = require('express-validator')
//! Controller Functions

//@route POST /api/exercises
//@desc Create  New exercise
//@access Private
const createExercise = asyncHandler(async (req, res) => {
  const { exerciseName, exerciseType, duration, date, details } = req.body
  // middleware result
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  // create exercise
  // req.user is coming from verifyToken middleware
  // console.log(req.user)
  const exercise = await Exercise.create({
    userId: req.user.id,
    exerciseName,
    exerciseType,
    duration,
    date,
    details,
  })
  res.status(201).json(exercise)
})

//@route GET /api/exercises
//@desc Get all exercises
//@access Private
const getExercises = asyncHandler(async (req, res) => {
  res.send('getExercises')
})

//@route PUT/PATCH /api/exercises/:exerciseId
//@desc  Update exercise
//@access Private
const editExercise = asyncHandler(async (req, res) => {
  res.send('editExercise')
})

//@route DELETE /api/exercises/:exerciseId
//@desc delete exercise
//@access Private
const deleteExercise = asyncHandler(async (req, res) => {
  res.send('deleteExercise')
})

//@route GET /api/exercises/:type
//@desc Get exercise By Type
//@access Private
const getExercisesByType = asyncHandler(async (req, res) => {
  res.send('getExercisesByType')
})

module.exports = {
  createExercise,
  getExercises,
  editExercise,
  deleteExercise,
  getExercisesByType,
}
