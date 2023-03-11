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

const exerciseService = {
  createExercise,
}
export default exerciseService
