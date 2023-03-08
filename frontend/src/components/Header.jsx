import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header className='sticky z-40 top-0 right-0 left-0 py-4 px-4 border-b border-[#E8EAED] max-h-16 bg-white shadow-sm'>
        <nav className='max-w-7xl mx-auto flex justify-between items-center overflow-x-hidden'>
          <h2 className='flex-auto'>
            <Link
              to='/'
              className='text-[#21C065] font-semibold sm:text-2xl text-lg'
            >
              Exercise Tracker
            </Link>
          </h2>
          <ul className='flex-none flex my-auto'>
            <li className='rounded max-w-max py-1 px-4 text-black'>
              <Link to='/login' className='font-medium'>
                Login
              </Link>
            </li>
            <li className='rounded max-w-max py-1 px-4 text-black'>
              <Link to='/register' className='font-medium'>
                Signup
              </Link>
            </li>
            <li className='rounded max-w-max py-1 px-4 text-black'>
              <Link to='/dashboard' className='font-medium'>
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
