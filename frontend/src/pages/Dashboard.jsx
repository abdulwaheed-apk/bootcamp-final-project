import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

//
function Dashboard() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])
  return (
    <>
      <Header />
      <section className='grid grid-cols-5 place-items-start max-w-7xl mx-auto relative'>
        <Sidebar />
        <section className='bg-white col-span-5 md:col-span-4'>
          <Outlet />
        </section>
      </section>
    </>
  )
}

export default Dashboard
