'use client'

import Link from 'next/link'
import { useState } from 'react'
import { registerUser } from '../../../api/users.api'
import Alert from '@/components/Alert'

function RegisterPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  })
  const [alert, setAlert] = useState({
    msg: '',
    error: true,
  })
  const [loading, setLoading] = useState(false)

  const handleRegisterChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await registerUser(formData)
      if (response.error) {
        setAlert({
          msg: response.msg,
          error: true
        })
      } else {
        setAlert({
          msg: response.msg,
          error: false
        })
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <h2 className='pt-8 text-4xl font-bold text-center'>Register</h2>
      <form onSubmit={handleRegisterSubmit} className='max-w-lg mx-auto mb-2'>
        <fieldset>
          <legend className='text-center py-4 text-xl text-gray-500'>Welcome, new user</legend>
          <label className='text-lg font-medium' htmlFor="first_name">First name</label>
          <input
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='Andres Eduardo'
            type="text"
            name='first_name'
            onChange={handleRegisterChange}
            value={formData.first_name}
          />
          <label className='text-lg font-medium' htmlFor="last_name">Last name</label>
          <input
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='Rosas Alpiri'
            type="text"
            name='last_name'
            onChange={handleRegisterChange}
            value={formData.last_name}
          />
          <label className='text-lg font-medium' htmlFor="email">Email</label>
          <input
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='correo@correo.com'
            type="email"
            name='email'
            onChange={handleRegisterChange}
            value={formData.email}
          />
          <label className='text-lg font-medium' htmlFor="password">Password</label>
          <input
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='******'
            type="password"
            name='password'
            onChange={handleRegisterChange}
            value={formData.password}
          />
        </fieldset>
        <button type='submit' className='font-medium text-white py-2 px-4 w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-md'>Register Me</button>
      </form>
      {loading && <p className="p-8 text-center font-medium">Loading...</p>}
      {alert.msg && <Alert msg={alert.msg} error={alert.error} />}
      <Link href={{ pathname: '/login' }} className='block max-w-lg mx-auto text-left text-base text-blue-400'>You do have an account? Sign in</Link>
      <Link href={{ pathname: '/forgot-password' }} className='block max-w-lg mx-auto text-left text-base text-blue-400'>Did you forget your password? we help you</Link>
    </section>
  )
}

export default RegisterPage