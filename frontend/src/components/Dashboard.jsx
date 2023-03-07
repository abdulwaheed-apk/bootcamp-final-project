import Sidebar from './Sidebar'
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from 'react-icons/ai'

const Dashboard = () => {
  return (
    <>
      <section class='flex '>
        <Sidebar />
        {/* Form */}
        <section class='flex-auto p-4 mx-auto sm:ml-64 bg-white relative top-32'>
          <form
            action=''
            method='post'
            class='max-w-3xl bg-white rounded-2xl drop-shadow-md px-4 py-8'
          >
            <div class='grid grid-cols-2 gap-4'>
              <label class='block'>
                <span class='block text-sm font-medium text-slate-700'>
                  Exercise Name
                </span>
                <input
                  type='text'
                  name='text'
                  placeholder='Morning walk for 5 KM'
                  class='mt-1 block w-full mb-4 px-3 py-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none
                                   focus:border-[#21C065] focus:ring-1 focus:ring-[#21C065]'
                />
              </label>
              <label class='block'>
                <span class='block text-sm font-medium text-slate-700'>
                  Exercise Type
                </span>
                <select
                  name=''
                  class='mt-1 block w-full mb-4 px-3 py-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none
                                   focus:border-[#21C065] focus:ring-1 focus:ring-[#21C065]'
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
            <div class='grid grid-cols-2 gap-4'>
              <label class='block'>
                <span class='block text-sm font-medium text-slate-700'>
                  Date
                </span>
                <input
                  type='date'
                  name='date'
                  class='mt-1 block w-full mb-4 px-3 py-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none
                                   focus:border-[#21C065] focus:ring-1 focus:ring-[#21C065]'
                />
              </label>
              <label class='block'>
                <span class='block text-sm font-medium text-slate-700'>
                  Duration
                </span>
                <input
                  type='text'
                  name='duration'
                  placeholder='30 minutes'
                  class='mt-1 block w-full mb-4 px-3 py-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none
                                   focus:border-[#21C065] focus:ring-1 focus:ring-[#21C065]'
                />
              </label>
            </div>
            <div class='grid grid-cols-1 gap-4'>
              <label class='block'>
                <span class='block text-sm font-medium text-slate-700'>
                  Duration
                </span>
                <textarea
                  name='details'
                  cols='30'
                  rows='3'
                  class='mt-1 block w-full mb-4 px-3 py-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none
                                   focus:border-[#21C065] focus:ring-1 focus:ring-[#21C065]'
                ></textarea>
              </label>
            </div>
            <button
              type='submit'
              class='bg-[#00AB55] rounded-lg px-4 py-1 text-white font-semibold flex-none'
            >
              Add
              <AiFillPlusCircle className='ont-semibold text-lg' />
            </button>
          </form>
          {/* Stats Sections  */}
          <section class='grid grid-cols-1 lg:grid-cols-3 gap-4 py-8 px-4 '>
            {/* Card 1 */}
            <div class='bg-gradient-to-tr from-[#444444] to-[#2a2a2a] rounded-2xl drop-shadow-md text-white max-w-md py-5 px-4'>
              <div class='flex  items-center justify-between max-h-6  '>
                <p class='font-semibold text-xl bg-white rounded text-[#212B36] px-2'>
                  Walking
                </p>
                <div class='ml-auto mr-0 '>
                  <button type='button' class='mx-1'>
                    <AiFillDelete />
                  </button>
                  <button type='button' class='mx-1'>
                    <AiFillEdit />
                  </button>
                </div>
              </div>
              <div class='border-t-2 my-2 pt-5 border-[#E8EAED]'>
                <h4 class='font-semibold text-xl -mt-3'>Daily morning walk.</h4>
                <p class='font-light text-base italic'>90 minutes</p>
                <p class='font-normal text-base text-gray-300'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p class='font-light text-base mt-2'>5 March 2023</p>
              </div>
            </div>
            {/* Card 2 */}
            <div class='bg-gradient-to-tr from-[#444444] to-[#2a2a2a] rounded-2xl drop-shadow-md text-white max-w-md py-5 px-4'>
              <div class='flex  items-center justify-between max-h-6  '>
                <p class='font-semibold text-xl bg-white rounded text-[#212B36] px-2'>
                  Running
                </p>
                <div class='ml-auto mr-0 '>
                  <button type='button' class='mx-1'>
                    <AiFillDelete />
                  </button>
                  <button type='button' class='mx-1'>
                    <AiFillEdit />
                  </button>
                </div>
              </div>
              <div class='border-t-2 my-2 pt-5 border-[#E8EAED]'>
                <h4 class='font-semibold text-xl -mt-3'>
                  Routine Running in park.
                </h4>
                <p class='font-light text-base italic'>30 minutes</p>
                <p class='font-normal text-base text-gray-300'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p class='font-light text-base mt-2'>5 March 2023</p>
              </div>
            </div>
            <div class='bg-gradient-to-tr from-[#444444] to-[#2a2a2a] rounded-2xl drop-shadow-md text-white max-w-md py-5 px-4'>
              <div class='flex  items-center justify-between max-h-6  '>
                <p class='font-semibold text-xl bg-white rounded text-[#212B36] px-2'>
                  Hiking
                </p>
                <div class='ml-auto mr-0 '>
                  <button type='button' class='mx-1'>
                    <AiFillDelete />
                  </button>
                  <button type='button' class='mx-1'>
                    <AiFillEdit />
                  </button>
                </div>
              </div>
              <div class='border-t-2 my-2 pt-5 border-[#E8EAED]'>
                <h4 class='font-semibold text-xl -mt-3'>
                  Once in a weak Hiking.
                </h4>
                <p class='font-light text-base italic'>300 minutes</p>
                <p class='font-normal text-base text-gray-300'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p class='font-light text-base mt-2'>10 March 2023</p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  )
}
export default Dashboard
