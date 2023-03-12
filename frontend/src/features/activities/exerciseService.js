import axios from 'axios'
import { exerciseEndpoint } from '../../core/endpoints'
// Create Exercise
const createExercise = async (exerciseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(exerciseEndpoint, exerciseData, config)
  return response.data
}
// getExercises
const getExercises = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(exerciseEndpoint, config)
  // console.log('response.data', response.data)
  return response.data
}
// Delete Exercise
const deleteExercise = async (exerciseId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(
    exerciseEndpoint + `/${exerciseId}`,
    config
  )
  // console.log('response.data', response.data)
  return response.data
}
// Edit-Update Exercise
const updateExercise = async (exerciseId, token) => {
  // console.log('exerciseId reached in service', exerciseId)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(exerciseEndpoint + `/${exerciseId}`, config)

  console.log('response from server', response.data)
  return response.data
}

const exerciseService = {
  createExercise,
  getExercises,
  deleteExercise,
  updateExercise,
}
export default exerciseService
