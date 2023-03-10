import React from 'react'

const Stats = () => {
  return (
    <>
      <section className='flex-auto px-4 pt-8 mx-auto sm:ml-72 bg-white'>
        <div className='bg-[#f2f3f5] rounded-2xl h-auto md:h-80 max-w-4xl px-8 py-8 md:py-16'>
          <p className='font-semibold text-xl md:text-2xl'>
            Welcome back! Abdul Waheed
          </p>
          <div className='font-medium text-sm my-4'>
            <p>
              The world breaks everyone, and afterward, many are strong at the
              broken places.
            </p>
            <p className='mt-2 italic'>-Ernest Hemingway</p>
          </div>
          <button
            type='button'
            className='bg-red-500 rounded-lg text-xs font-semibold text-white px-4 py-2'
          >
            Add New Exercise
          </button>
        </div>
        {/* <!-- Stats Sections --> */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 px-4'>
          <div className='bg-white rounded-2xl drop-shadow-md max-w-md py-5 px-4'>
            <p className='font-semibold text-xl'>Exercise Activity Types</p>
            <div className='border-t-2 my-2 pt-5 border-[#E8EAED]'>
              <div className='grid grid-cols-2 md:grid-cols-5 -mt-4 mb-2 gap-2 place-items-center'>
                <h6 className='font-medium text-xs'>Run</h6>
                <h6 className='font-medium text-xs'>Swim</h6>
                <h6 className='font-medium text-xs'>Hike</h6>
                <h6 className='font-medium text-xs'>Bicycling</h6>
                <h6 className='font-medium text-xs'>Walk</h6>
              </div>
              {/* <!-- Circle --> */}
              <div className=' w-40 md:w-64 h-40 md:h-64  rounded-full border-4 md:border-8 border-[#00AB55] border-dashed mx-auto'></div>
            </div>
          </div>
          <div className='grid grid-rows-3 grid-flow-col gap-4'>
            {/* <!-- Time card --> */}
            <div className='bg-white rounded-2xl drop-shadow-md max-w-xs max-h-36 my-1 px-4'>
              <h4 className='font-semibold text-sm my-2 text-center'>
                Total Hours Of Exercise(1 hour daily)
              </h4>
              <div className='flex justify-around items-center my-1'>
                <p className='font-semibold text-3xl'>180</p>
                <p className='font-bold text-3xl'></p>
                <p>
                  <i className='fa-solid fa-clock text-4xl text-cyan-900'></i>
                </p>
              </div>
            </div>
            {/* <!-- Distance Card --> */}
            <div className='bg-white rounded-2xl drop-shadow-md max-w-xs max-h-36 my-1 px-4'>
              <h4 className='font-semibold text-sm my-2 text-center'>
                Total Distance Covered
              </h4>
              <div className='flex justify-around items-center my-1'>
                <p className='font-semibold text-3xl'>900 KM</p>
                <p className='font-bold text-3xl'></p>
                <p>
                  <i className='fa-solid fa-road text-4xl text-amber-900'></i>
                </p>
              </div>
            </div>
            {/* <!-- Calories Card --> */}
            <div className='bg-white rounded-2xl drop-shadow-md max-w-xs max-h-36 my-1 px-4'>
              <h4 className='font-semibold text-sm my-2 text-center'>
                Today's Calories Burned
              </h4>
              <div className='flex justify-around items-center my-1'>
                <p className='font-semibold text-3xl'>300 Calories</p>
                <p className='font-bold text-3xl'></p>
                <p>
                  <i className='fa-solid fa-fire text-4xl text-orange-600'></i>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Stats
