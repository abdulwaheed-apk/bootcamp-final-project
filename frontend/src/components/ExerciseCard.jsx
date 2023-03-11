import { FiEdit } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getExercises, reset } from '../features/activities/exerciseSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Sidebar'

//
const ExerciseCard = () => {
  const { exercises, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.exercises
  )

  // Promise side effects
  // console.log('yyyyyy', exercises)
  // console.log(exercises.length)
  const handleDelete = () => {
    console.log('Delete me By _id')
  }
  const handleEdit = () => {
    console.log('Edit me By _id')
  }
  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-8 px-4'>
        {exercises.length > 0
          ? exercises.map((exercise) => (
              <div
                className='bg-gradient-to-tr from-[#444444] to-[#2a2a2a] rounded-2xl drop-shadow-md text-white max-w-md py-5 px-4'
                key={exercise._id}
              >
                <div className='flex  items-center justify-between max-h-6  '>
                  <p className='font-semibold text-xl bg-white rounded text-[#212B36] px-2'>
                    {exercise.exerciseType}
                  </p>
                  <div className='ml-auto mr-0 '>
                    <button
                      type='button'
                      className='mx-1'
                      onClick={handleDelete}
                    >
                      <FaTrash />
                    </button>
                    <button type='button' className='mx-1' onClick={handleEdit}>
                      <FiEdit />
                    </button>
                  </div>
                </div>
                <div className='border-t-2 my-2 pt-5 border-[#E8EAED]'>
                  <h4 className='font-semibold text-xl -mt-3'>
                    {exercise.exerciseName}
                  </h4>
                  <p className='font-light text-base italic'>
                    {' '}
                    {exercise.duration} minutes
                  </p>
                  <p className='font-normal text-base text-gray-300'>
                    {exercise.details}
                  </p>
                  <p className='font-light text-base mt-2'>{exercise.date}</p>
                </div>
              </div>
            ))
          : 'You do not have any exercise Kindly add new exercise'}
      </section>
    </>
  )
}

export default ExerciseCard
