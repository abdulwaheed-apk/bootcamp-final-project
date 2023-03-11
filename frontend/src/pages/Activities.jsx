import { useState, useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { reset, createExercise } from '../features/activities/exerciseSlice'
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
      <section className='flex-auto p-4 mx-auto sm:ml-64 bg-white relative top-8'>
        <form
          action=''
          method='post'
          className='max-w-3xl bg-white rounded-2xl drop-shadow-md px-4 py-8'
          onSubmit={handleSubmit}
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
                <option value='Riding'>Riding</option>
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
                Duration
              </span>
              <input
                type='text'
                name='duration'
                value={duration}
                onChange={handleChange}
                placeholder='30 minutes'
                className='mt-1 block w-full mb-4 p-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500'
              />
            </label>
          </div>
          <div className='grid grid-cols-1 gap-4'>
            <label className='block'>
              <span className='block text-sm font-medium text-slate-700'>
                Duration
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
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-8 px-4 '>
          {/* <!-- Card 1 --> */}
          <div className='bg-gradient-to-tr from-[#444444] to-[#2a2a2a] rounded-2xl drop-shadow-md text-white max-w-md py-5 px-4'>
            <div className='flex  items-center justify-between max-h-6  '>
              <p className='font-semibold text-xl bg-white rounded text-[#212B36] px-2'>
                Walking
              </p>
              <div className='ml-auto mr-0 '>
                <button type='button' className='mx-1'>
                  <FaTrash />
                </button>
                <button type='button' className='mx-1'>
                  <FiEdit />
                </button>
              </div>
            </div>
            <div className='border-t-2 my-2 pt-5 border-[#E8EAED]'>
              <h4 className='font-semibold text-xl -mt-3'>
                Daily morning walk.
              </h4>
              <p className='font-light text-base italic'>90 minutes</p>
              <p className='font-normal text-base text-gray-300'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p className='font-light text-base mt-2'>5 March 2023</p>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className='bg-gradient-to-tr from-[#444444] to-[#2a2a2a] rounded-2xl drop-shadow-md text-white max-w-md py-5 px-4'>
            <div className='flex  items-center justify-between max-h-6  '>
              <p className='font-semibold text-xl bg-white rounded text-[#212B36] px-2'>
                Running
              </p>
              <div className='ml-auto mr-0 '>
                <button type='button' className='mx-1'>
                  <FaTrash />
                </button>
                <button type='button' className='mx-1'>
                  <FiEdit />
                </button>
              </div>
            </div>
            <div className='border-t-2 my-2 pt-5 border-[#E8EAED]'>
              <h4 className='font-semibold text-xl -mt-3'>
                Routine Running in park.
              </h4>
              <p className='font-light text-base italic'>30 minutes</p>
              <p className='font-normal text-base text-gray-300'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p className='font-light text-base mt-2'>5 March 2023</p>
            </div>
          </div>
          <div className='bg-gradient-to-tr from-[#444444] to-[#2a2a2a] rounded-2xl drop-shadow-md text-white max-w-md py-5 px-4'>
            <div className='flex  items-center justify-between max-h-6  '>
              <p className='font-semibold text-xl bg-white rounded text-[#212B36] px-2'>
                Hiking
              </p>
              <div className='ml-auto mr-0 '>
                <button type='button' className='mx-1'>
                  <FaTrash />
                </button>
                <button type='button' className='mx-1'>
                  <FiEdit />
                </button>
              </div>
            </div>
            <div className='border-t-2 my-2 pt-5 border-[#E8EAED]'>
              <h4 className='font-semibold text-xl -mt-3'>
                Once in a weak Hiking.
              </h4>
              <p className='font-light text-base italic'>300 minutes</p>
              <p className='font-normal text-base text-gray-300'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p className='font-light text-base mt-2'>10 March 2023</p>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Activities
