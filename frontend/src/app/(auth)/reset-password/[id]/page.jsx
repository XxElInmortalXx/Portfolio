import Link from 'next/link'
import React from 'react'

function ResetPasswordPage() {
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <h2 className='pt-8 text-4xl font-bold text-center'>Register</h2>
      <form className='max-w-lg mx-auto mb-2'>
        <fieldset>
          <legend className='text-center py-4 text-xl text-gray-500'>Welcome, new user</legend>
          <label className='text-lg font-medium' htmlFor="password">Password</label>
          <input
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='******'
            type="password"
            name='password'
          />
        </fieldset>
        <button type='submit' className='font-medium text-white py-2 px-4 w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-md'>Register Me</button>
      </form>
      <Link href={{ pathname: '/login' }} className='block max-w-lg mx-auto text-left text-base text-blue-400'>You do have an account? Sign in</Link>
    </section>
  )
}

export default ResetPasswordPage