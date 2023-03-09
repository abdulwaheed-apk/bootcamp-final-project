import { useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  // Handle Change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  // Handle Change
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formData', formData)
  }
  return (
    <>
      <div className='max-w-2xl mx-auto bg-white pb-6 rounded-3xl drop-shadow-md mt-20'>
        <div className='pt-8 pb-0 px-6'>
          <h4 className='font-semibold text-[#212b36]'>Log in</h4>
          <div className='flex '>
            <p className='text-gray-500 font-normal mr-3'>
              Don't have an account?
            </p>
            <Link to='/register' className='text-[#21C065] font-medium'>
              Register
            </Link>
          </div>
        </div>

        <div className='pt-1 pb-0 px-6'>
          <form action='' method='post' onSubmit={handleSubmit}>
            <div>
              <fieldset className='border border-[#212b36] py-0 px-2 rounded-lg focus:border-[#21C065]'>
                <legend className='px-2 font-normal'>Email</legend>
                <input
                  type='email'
                  name='email'
                  placeholder='ali@gmail.io'
                  className='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0 '
                  value={email}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className='border border-[#212b36] py-1 px-2 my-3 rounded-lg focus:border-[#21C065]'>
                <legend className='px-2 font-normal'>Password</legend>
                <input
                  type='password'
                  name='password'
                  placeholder='********'
                  className='bg-white focus:outline-none focus:bg-white rounded-lg block w-full text-gray-500 font-normal px-3 py-2 focus:ring-sky-500'
                  value={password}
                  onChange={handleChange}
                />
              </fieldset>
              <button
                type='submit'
                className='block w-full bg-[#21C065] rounded-lg px-3 py-4 font-semibold text-sm text-white'
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
