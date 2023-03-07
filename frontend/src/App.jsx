import { Route, Routes } from 'react-router-dom'
import './App.css'
import Exercise from './features/exercises/Exercise'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Header from './components/Header'

function App() {
  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        {/* <Exercise /> */}
      </div>
    </>
  )
}

export default App
