'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { resetPassword } from '../../../../api/users.api'
import Alert from '@/components/Alert'

function ResetPasswordPage({ params }) {
  const [formData, setFormData] = useState({
    password: ''
  })
  const [alert, setAlert] = useState({
    msg: '',
    error: true
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await resetPassword(params.id, formData)
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
      setAlert({
        msg: error.response.data.msg,
        error: true
      })
    }
    setLoading(false)
  }

  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <h2 className='pt-8 text-4xl font-bold text-center'>Register</h2>
      <form onSubmit={handleSubmit} className='max-w-lg mx-auto mb-2'>
        <fieldset>
          <legend className='text-center py-4 text-xl text-gray-500'>Welcome, new user</legend>
          <label className='text-lg font-medium' htmlFor="password">Password</label>
          <input
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='******'
            type="password"
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </fieldset>
        <button type='submit' className='font-medium text-white py-2 px-4 w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-md'>Register Me</button>
      </form>
      {loading && <p className="p-8 text-center font-medium">Loading...</p>}
      {alert.msg !== '' && <Alert msg={alert.msg} error={alert.error} />}
      <Link href={{ pathname: '/login' }} className='block max-w-lg mx-auto text-left text-base text-blue-400'>You do have an account? Sign in</Link>
    </section>
  )
}

export default ResetPasswordPage