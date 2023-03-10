import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Home() {
  return (
    <>
      <Header />
      <main className='container max-w-7xl py-16 px-4 mx-auto flex flex-col-reverse md:flex-row justify-between items-center'>
        <div>
          <h1 className='font-bold normal-case text-4xl md:text-6xl max-w-xl leading-tight tracking-tight mb-2'>
            Let us manage and track your activities, you
            <span className='text-red-500'> Focus On Keep Going</span>.
          </h1>
          <h4 className='my-4 font-medium text-gray-500'>
            Your physical health is just as important as your mental health.
          </h4>
          <div className='my-4 py-6'>
            <Link
              to='/register'
              className='rounded-md text-[#212b36] font-semibold bg-transparent border  border-[#919eab52] hover:border-[#212b36] px-10 py-3'
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className='w-5/6 md:w-1/2 pl-12'>
          <div className='max-w-lg ml-auto'>
            <img src='/workout.svg' alt='Activity Tracker' />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
