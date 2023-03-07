import { useSelector, useDispatch } from 'react-redux'
import styles from './Exercise.module.css'
import {
  addNewExercise,
  updateAnyExercise,
  deleteAnyExercise,
} from './exerciseSlice'

const Exercise = () => {
  const allExercises = useSelector((state) => state.exercise.allExercises)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='flex justify-around items-center'>
        <button
          className='my-2 px-5 py-3 rounded-full w-1/5 border bg-orange-300'
          aria-label='Create'
          onClick={() => dispatch(addNewExercise())}
        >
          Create
        </button>
        <button
          className='my-2 px-5 py-3 rounded-full w-1/5 border bg-amber-700'
          aria-label='Update'
          onClick={() => dispatch(updateAnyExercise())}
        >
          Update
        </button>
        <button
          className='my-2 px-5 py-3 rounded-full w-1/5 border bg-purple-800'
          aria-label='Delete'
          onClick={() => dispatch(deleteAnyExercise())}
        >
          Delete
        </button>
      </div>
      <p className='text-center my-3 font-thin text-green-900'>Read here</p>
    </div>
  )
}
export default Exercise
