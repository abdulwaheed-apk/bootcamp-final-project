import { createAsyncThunk, createSlice, isPending } from '@reduxjs/toolkit'
import exerciseService from './exerciseService'
const initialState = {
  exercises: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}
// Create exercise
export const createExercise = createAsyncThunk(
  'exercise/create',
  async (exerciseData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      // console.log(token)
      return await exerciseService.createExercise(exerciseData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
// Get Exercises
export const getExercises = createAsyncThunk(
  'exercise/get',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await exerciseService.getExercises(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createExercise.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createExercise.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createExercise.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.exercises.push(action.payload)
      })
      .addCase(getExercises.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getExercises.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getExercises.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.exercises = action.payload
      })
  },
})

export const { reset } = exerciseSlice.actions

export default exerciseSlice.reducer
