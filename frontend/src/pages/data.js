import { FaUser } from 'react-icons/fa'
import { HiSquares2X2 } from 'react-icons/hi2'
import { BiStats } from 'react-icons/bi'
import { BsFillBarChartFill } from 'react-icons/bs'
const sidebarMenu = [
  {
    title: 'stats',
    path: '',
    icon: BsFillBarChartFill,
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
