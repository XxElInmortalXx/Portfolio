'use client'

import { loginUser } from '@/api/users.api'
import Alert from '@/components/Alert'
import { AuthContext } from '@/contexts/authContext'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookie from 'js-cookie'

function LoginPage() {
  const router = useRouter()
  const { login } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [alert, setAlert] = useState({
    msg: '',
    error: true,
  })
  const [loading, setLoading] = useState(false)

  const handleLoginChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await loginUser(formData)
      if (response.admin) {
        Cookie.set('ADMIN', 'true')
      }
      if (response.error) {
        setAlert({
          msg: response.msg,
          error: true
        })
      } else {
        login(response.jwt)
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <h2 className='pt-8 text-4xl font-bold text-center'>Login</h2>
      <form onSubmit={handleLoginSubmit} className='max-w-lg mx-auto mb-2'>
        <fieldset>
          <legend className='text-center py-4 text-xl text-gray-500'>Welcome again</legend>
          <label className='text-lg font-medium' htmlFor="email">Email</label>
          <input
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='correo@correo.com'
            type="email"
            name='email'
            onChange={handleLoginChange}
            value={formData.email}
          />
          <label className='text-lg font-medium' htmlFor="password">Password</label>
          <input
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='******'
            type="password"
            name='password'
            onChange={handleLoginChange}
            value={formData.password}
          />
        </fieldset>
        <button type='submit' className='font-medium text-white py-2 px-4 w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-md'>Get In</button>
      </form>
      {loading && <p className="p-8 text-center font-medium">Loading...</p>}
      {alert.msg && <Alert msg={alert.msg} error={alert.error} />}
      <Link href={{ pathname: '/register' }} className='block max-w-lg mx-auto text-left text-base text-blue-400'>You do not have an account? Sign up</Link>
      <Link href={{ pathname: '/forgot-password' }} className='block max-w-lg mx-auto text-left text-base text-blue-400'>Did you forget your password? we help you</Link>
    </section>
  )
}

export default LoginPage