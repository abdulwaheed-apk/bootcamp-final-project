import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'

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
          <i className='fa-solid fa-bars font-bold text-[#00AB55] text-2xl ml-6 mt-4'></i>{' '}
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
              <i className='fa-solid fa-x text-[#00AB55] font-bold text-2xl'></i>
            </button>
            {/* <!-- User --> */}
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
            {/* <!-- Nav  --> */}
            <ul className='mt-8 space-y-2'>
              <li className='bg-[#EBF9F1] w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#00AB55] font-semibold text-xs'>
                  <i className='fa-solid fa-user mr-2'></i>
                  <a href='./dashboard-profile.html'>Profile</a>
                </h4>
              </li>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs'>
                  {' '}
                  <i className='fa-solid fa-person-swimming mr-2'></i>
                  <a href='./all-activites.html'>All Activities</a>
                </h4>
              </li>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs'>
                  {' '}
                  <i className='fa-solid fa-person-running mr-2'></i>
                  <a href='#'>Running</a>
                </h4>
              </li>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs'>
                  {' '}
                  <i className='fa-solid fa-person-hiking mr-2'></i>
                  <a href='#'>Hiking</a>
                </h4>
              </li>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs'>
                  {' '}
                  <i className='fa-solid fa-person-biking mr-2'></i>
                  <a href='#'>Bicycling</a>
                </h4>
              </li>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs'>
                  {' '}
                  <i className='fa-solid fa-person-walking mr-2'></i>
                  <a href='#'>Walking</a>
                </h4>
              </li>
              <li className='bg-white w-56 mx-auto h-12 rounded-xl flex justify-start items-center px-8'>
                <h4 className='text-[#637381] font-semibold text-xs'>
                  {' '}
                  <i className='fa-solid fa-person-swimming mr-2'></i>
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
