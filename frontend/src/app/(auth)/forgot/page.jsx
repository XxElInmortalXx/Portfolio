import Link from "next/link"

function ForgotPage() {
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <h2 className='pt-8 text-4xl font-bold text-center'>Forgot my password</h2>
      <form className='max-w-lg mx-auto mb-2'>
        <fieldset>
          <legend className='text-center py-4 text-xl text-gray-500'>don't worry, we'll help you</legend>
          <label className='text-lg font-medium' htmlFor="email">Email</label>
          <input
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='correo@correo.com'
            type="email"
            name='email'
          />
        </fieldset>
        <button type='submit' className='font-medium text-white py-2 px-4 w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-md'>Send me instructions</button>
      </form>
      <Link href={{ pathname: '/login' }} className='block max-w-lg mx-auto text-left text-base text-blue-400'>You do have an account? Sign in</Link>
      <Link href={{ pathname: '/register' }} className='block max-w-lg mx-auto text-left text-base text-blue-400'>You do not have an account? Sign up</Link>
    </section>
  )
}

export default ForgotPage