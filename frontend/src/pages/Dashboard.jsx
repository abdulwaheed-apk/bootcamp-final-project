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
      <section className='flex items-center space-x-4'>
        <Sidebar />
        <section className='bg-white'>
          <Outlet />
        </section>
      </section>
    </>
  )
}

export default Dashboard
