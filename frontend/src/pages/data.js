import { FaUser, FaChartBar } from 'react-icons/fa'
import { HiSquares2X2 } from 'react-icons/hi2'
import { BiStats } from 'react-icons/bi'
import { BsFillBarChartFill } from 'react-icons/bs'
const sidebarMenu = [
  {
    title: 'stats',
    path: '',
    icon: FaChartBar,
  },
  {
    title: 'All Activities',
    path: 'activities',
    icon: HiSquares2X2,
  },
  {
    title: 'Profile',
    path: 'profile',
    icon: FaUser,
  },
]

export default sidebarMenu

//<AiOutlineBarChart className=' h-8 w-8 text-red-500' />
// BsFillBarChartFill
