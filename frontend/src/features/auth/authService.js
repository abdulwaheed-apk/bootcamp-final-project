import axios from 'axios'
import { userEndpoint } from '../../core/endpoints'

// console.log(userEndpoint)

// Register Call
const register = async (userData) => {
  const response = await axios.post(userEndpoint + '/register', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}
// Logout Call
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
}
export default authService
