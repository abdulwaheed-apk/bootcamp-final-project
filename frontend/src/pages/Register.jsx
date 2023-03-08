import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  })
  const { name, email, username, password } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/dashboard')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, dispatch, navigate])
  // Handle Change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('formData', formData)
    const userData = {
      name,
      email,
      password,
      username,
    }
    dispatch(register(userData))
  }
  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <main className='max-w-2xl mx-auto bg-white mt-10 pb-6 rounded-3xl drop-shadow-md mb-8'>
        <div className='pt-8 pb-0 px-6'>
          <h4 className='font-semibold text-[#212b36]'>Sign up</h4>
          <div className='flex '>
            <p className='text-gray-500 font-normal mr-3'>
              Already have an account?
            </p>
            <Link to='/login' className='text-[#21C065] font-medium'>
              Log in
            </Link>
          </div>
        </div>
        <div className='pt-1 pb-0 px-6'>
          <form action='' method='post' onSubmit={handleSubmit}>
            <div>
              <fieldset className='border border-[#212b36] py-0 px-2 my-2 rounded-lg focus:border-[#21C065]'>
                <legend className='px-2 font-normal'>Full Name</legend>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={handleChange}
                  placeholder='Muhammad Ali'
                  className='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0'
                />
              </fieldset>
              <fieldset className='border border-[#212b36] py-0 px-2 my-2 rounded-lg focus:border-[#21C065]'>
                <legend className='px-2 font-normal'>Email</legend>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  placeholder='ali@gmail.io'
                  className='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0 '
                />
              </fieldset>
              <fieldset className='border border-[#212b36] py-0 px-2 my-2 rounded-lg focus:border-[#21C065]'>
                <legend className='px-2 font-normal'>Username</legend>
                <input
                  type='text'
                  name='username'
                  value={username}
                  onChange={handleChange}
                  placeholder='muhammad.ali17'
                  className='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0 '
                />
              </fieldset>
              <fieldset className='border border-[#212b36] py-1 px-2 my-2 rounded-lg focus:border-[#21C065]'>
                <legend className='px-2 font-normal'>Create Password</legend>
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  placeholder='********'
                  className='bg-white focus:outline-none focus:bg-white rounded-lg block w-full text-gray-500 font-normal px-3 py-2 focus:ring-sky-500'
                />
              </fieldset>
              {/* <div className='flex content-between items-center pb-2 ml-1'>
                <input type='checkbox' name='t-and-c' className='mr-2' />
                <label htmlFor='t-and-c font-normal'>
                  I agree to
                  <Link to='' className='text-[#21C065]'>
                    T&C's
                  </Link>
                </label>
              </div> */}

              <button
                type='submit'
                className='block w-full bg-[#21C065] rounded-lg px-3 py-4 font-semibold text-sm text-white'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Register
