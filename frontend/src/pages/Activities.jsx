import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  reset,
  createExercise,
  getExercises,
} from '../features/activities/exerciseSlice'
import ExerciseCard from '../components/ExerciseCard'
const Activities = () => {
  const [formData, setFormData] = useState({
    exerciseName: '',
    exerciseType: '',
    duration: '',
    date: '',
    details: '',
  })
  const { exerciseName, exerciseType, duration, date, details } = formData
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { exercises, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.exercises
  )
  useEffect(() => {
    dispatch(getExercises())
  }, [isSuccess])
  // Handle Change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    /* console.log('@@exerciseName ---', exerciseName)
    console.log('@@exerciseType ---', exerciseType)
    console.log('@@duration ---', duration)
    console.log('@@date ---', date.toLocaleString('en-pk'))
    console.log('@@details ---', details) */
    const exerciseData = {
      exerciseName,
      exerciseType,
      duration,
      date,
      details,
    }
    dispatch(createExercise(exerciseData))
  }

  //
  return (
    <>
      {/* sm:ml-64 */}
      <section className='flex flex-col p-4 mx-auto bg-white relative top-8'>
        <form
          action=''
          method='post'
          className=' bg-white rounded-2xl drop-shadow-md px-4 py-8'
          onSubmit={handleSubmit}
          autoComplete='off'
        >
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                Exercise Name
              </span>
              <input
                type='text'
                name='exerciseName'
                placeholder='Morning walk for 5 KM'
                className='mt-1 block w-full mb-4 px-3 py-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500'
                value={exerciseName}
                onChange={handleChange}
              />
            </label>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                Exercise Type
              </span>
              <select
                name='exerciseType'
                className='mt-1 block w-full mb-4 px-3 py-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500'
                value={exerciseType}
                onChange={handleChange}
              >
                <option value='Running'>Running</option>
                <option value='Swimming'>Swimming</option>
                <option value='Bicycling'>Bicycling</option>
                <option value='Walking'>Walking</option>
                <option value='Hiking'>Hiking</option>
              </select>
            </label>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                Date
              </span>
              <input
                type='date'
                name='date'
                value={date}
                onChange={handleChange}
                className='mt-1 block w-full mb-4 px-3 py-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500'
              />
            </label>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                Duration (minutes)
              </span>
              <input
                type='text'
                name='duration'
                value={duration}
                onChange={handleChange}
                placeholder='30'
                className='mt-1 block w-full mb-4 p-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500'
              />
            </label>
          </div>
          <div className='grid grid-cols-1 gap-4'>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                Details
              </span>
              <textarea
                name='details'
                cols='30'
                rows='3'
                className='mt-1 block w-full mb-4 px-3 py-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500'
                value={details}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          <button
            type='submit'
            className='bg-red-500 rounded-lg p-2 text-white w-full md:w-auto font-semibold flex-none capitalize'
          >
            Add new exercise
            <i className='fa-solid fa-plus font-semibold text-lg'></i>
          </button>
        </form>
        {/* <!-- Stats Sections --> */}
        <ExerciseCard />
      </section>
    </>
  )
}

export default Activities
