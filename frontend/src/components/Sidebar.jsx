import { NavLink } from 'react-router-dom'
import sidebarMenu from '../pages/data'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
const Sidebar = () => {
  const [display, setDisplay] = useState()
  const handleClose = () => {}
  const handleShow = () =>
    // if()
    {}
  return (
    <>
      <button onClick={handleShow} className='block md:hidden ml-4 my-2'>
        <FaBars className=' h-8 w-8 text-red-500' />
      </button>{' '}
      <aside className='fixed hidden md:block top-16 left-0 bg-white shadow-lg h-screen w-64 flex flex-col'>
        <nav>
          <div className='block md:hidden rounded-xl mx-auto my-2 flex justify-end'>
            {' '}
            <button onClick={handleClose}>
              <AiOutlineClose className=' h-8 w-8 text-red-500' />
            </button>{' '}
          </div>
          <div class='bg-[#F2F3F5] w-56 mx-auto h-20 rounded-xl flex justify-around items-center px-4 my-5'>
            <img src='/vite.svg' alt='avatar' class='w-14 rounded-full' />
            <div>
              <h4 class='font-medium text-base'>Abdul Waheed</h4>
              <h6 class='font-normal text-xs'>abdulwaheed.apk</h6>
            </div>
          </div>
          <ul className='space-y-2 mt-2'>
            {sidebarMenu.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? ' bg-red-500 text-white flex items-center h-12 w-56 mx-auto rounded-md'
                      : 'bg-[#f2f3f5] flex items-center h-12 w-56 mx-auto rounded-lg transition-all duration-200 ease-linear hover:font-medium hover:animate-pulse hover:scale-105'
                  }
                >
                  <span className='w-1/3 grid place-items-end mr-2'>
                    {' '}
                    {<item.icon />}{' '}
                  </span>{' '}
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

// onClick={
//   window.location.pathname == `/${item.path}`
//      setIsActive(!isActive)
//     : null
// }

// flex items-center h-12 w-56 mx-auto rounded-lg