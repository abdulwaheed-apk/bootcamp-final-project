import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <main class='max-w-2xl mx-auto bg-white mt-10 pb-6 rounded-3xl drop-shadow-md mb-8'>
        <div class='pt-8 pb-0 px-6'>
          <h4 class='font-semibold text-[#212b36]'>Sign up</h4>
          <div class='flex '>
            <p class='text-gray-500 font-normal mr-3'>
              Already have an account?
            </p>
            <Link to='/login' class='text-[#21C065] font-medium'>
              Log in
            </Link>
          </div>
        </div>
        <div class='pt-1 pb-0 px-6'>
          <form action='' method='post'>
            <div>
              <fieldset class='border border-[#212b36] py-0 px-2 my-2 rounded-lg focus:border-[#21C065]'>
                <legend class='px-2 font-normal'>Full Name</legend>
                <input
                  type='text'
                  name='full-name'
                  placeholder='Muhammad Ali'
                  class='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0'
                />
              </fieldset>

              <fieldset class='border border-[#212b36] py-0 px-2 my-2 rounded-lg focus:border-[#21C065]'>
                <legend class='px-2 font-normal'>Email</legend>
                <input
                  type='email'
                  name='email'
                  placeholder='ali@gmail.io'
                  class='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0 '
                />
              </fieldset>
              <fieldset class='border border-[#212b36] py-0 px-2 my-2 rounded-lg focus:border-[#21C065]'>
                <legend class='px-2 font-normal'>Username</legend>
                <input
                  type='text'
                  name='username'
                  placeholder='muhammad.ali17'
                  class='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0 '
                />
              </fieldset>
              <fieldset class='border border-[#212b36] py-1 px-2 my-2 rounded-lg focus:border-[#21C065]'>
                <legend class='px-2 font-normal'>Create Password</legend>
                <input
                  type='password'
                  name='password'
                  placeholder='********'
                  class='bg-white focus:outline-none focus:bg-white rounded-lg block w-full text-gray-500 font-normal px-3 py-2 focus:ring-sky-500'
                />
              </fieldset>
              <div class='flex content-between items-center pb-2 ml-1'>
                <input type='checkbox' name='t-and-c' class='mr-2' />
                <label htmlFor='t-and-c font-normal'>
                  I agree to
                  <Link to='' class='text-[#21C065]'>
                    T&C's
                  </Link>
                </label>
              </div>

              <button
                type='submit'
                class='block w-full bg-[#21C065] rounded-lg px-3 py-4 font-semibold text-sm text-white'
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
