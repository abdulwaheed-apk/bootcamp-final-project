import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div class='max-w-2xl mx-auto bg-white pb-6 rounded-3xl drop-shadow-md mt-20'>
        <div class='pt-8 pb-0 px-6'>
          <h4 class='font-semibold text-[#212b36]'>Log in</h4>
          <div class='flex '>
            <p class='text-gray-500 font-normal mr-3'>Don't have an account?</p>
            <Link to='/register' class='text-[#21C065] font-medium'>
              Register
            </Link>
          </div>
        </div>

        <div class='pt-1 pb-0 px-6'>
          <form action='' method='post'>
            <div>
              <fieldset class='border border-[#212b36] py-0 px-2 rounded-lg focus:border-[#21C065]'>
                <legend class='px-2 font-normal'>Email</legend>
                <input
                  type='email'
                  name='email'
                  placeholder='ali@gmail.io'
                  class='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0 '
                />
              </fieldset>
              <fieldset class='border border-[#212b36] py-1 px-2 my-3 rounded-lg focus:border-[#21C065]'>
                <legend class='px-2 font-normal'>Password</legend>
                <input
                  type='password'
                  name='password'
                  placeholder='********'
                  class='bg-white focus:outline-none focus:bg-white rounded-lg block w-full text-gray-500 font-normal px-3 py-2 focus:ring-sky-500'
                />
              </fieldset>

              <button
                type='submit'
                class='block w-full bg-[#21C065] rounded-lg px-3 py-4 font-semibold text-sm text-white'
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
