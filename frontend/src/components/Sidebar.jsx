import {
  FaBars,
  FaSwimmer,
  FaRunning,
  FaHiking,
  FaWalking,
  FaUser,
} from 'react-icons/fa'
import { TbSwimming } from 'react-icons/tb'
import { AiOutlineClose } from 'react-icons/ai'
import { BiCycling } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <section className='flex-none'>
        <button
          className='md:block'
          type='button'
          data-drawer-target='user-sidebar'
          data-drawer-toggle='user-sidebar'
        >
          <span className='font-bold text-[#00AB55] text-2xl ml-6 mt-4'>
            <FaBars />
          </span>
        </button>
        <aside
          id='user-sidebar'
          className='hidden sm:block  fixed top-16 left-0 x-40 px-2 py-8 border-r border-[#E8EAED] bg-white'
          aria-label='User Sidebar'
        >
          <div className='w-64 h-screen overflow-y-auto flex flex-col space-y-8'>
            <button
              type='button'
              className='w-8 h-8 absolute right-2 top-2 block md:hidden'
            >
              <span className='fa-solid fa-x text-[#00AB55] font-bold text-2xl'>
                <AiOutlineClose />
              </span>
            </button>
            {/* User  */}
            <div className='bg-[#F2F3F5] w-56 mx-auto h-20 rounded-xl flex justify-around items-center px-4'>
              <img
                src='../../public/vite.svg'
                alt='avatar'
                className='w-14 rounded-full'
              />
              <div>
                <h4 className='font-medium text-base'>Abdul Waheed</h4>
                <h6 className='font-normal text-xs'>abdulwaheed.apk</h6>
              </div>
            </div>
            <ul className='mt-8 space-y-2'>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs flex items-center justify-around'>
                  {' '}
                  <FaUser className='mr-2' />
                  <Link to='/profile'>Profile </Link>
                </h4>
              </li>
              <li className='bg-[#EBF9F1] w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#00AB55] font-semibold text-xs flex items-center justify-around'>
                  <FaSwimmer className='mr-2 text-base ' />
                  <Link to='/dashboard'>All Activities</Link>
                </h4>
              </li>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs flex items-center'>
                  {' '}
                  <FaRunning className='mr-2' />
                  <a href='./login.html'>Running</a>
                </h4>
              </li>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs'>
                  {' '}
                  <FaHiking className='mr-2' />
                  <Link to='/hiking'>Hiking</Link>
                </h4>
              </li>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs'>
                  {' '}
                  <BiCycling className='mr-2' />
                  <a href='#'>Bicycling</a>
                </h4>
              </li>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs'>
                  {' '}
                  <FaWalking className='mr-2' />
                  <a href='#'>Walking</a>
                </h4>
              </li>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs'>
                  {' '}
                  <TbSwimming className='mr-2' />
                  <a href='#'>Swimming</a>
                </h4>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  )
}

export default Sidebar
