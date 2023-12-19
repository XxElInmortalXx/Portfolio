'use client'

import React, { useState } from 'react'
import { sendEmail } from '../../api/users.api'
import Alert from '@/components/Alert'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
      const response = await sendEmail(formData)
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
      <h2 className='pt-8 text-4xl font-bold text-center'>Contact</h2>
      <p className='text-center py-4'>Let's connect to collaborate</p>
      <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
        <fieldset>
          <legend className='text-center font-medium text-2xl'>let's talk</legend>
          <label className='text-lg font-medium' htmlFor="name">What is your name</label>
          <input
            type="text"
            name='name'
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500' placeholder='Andres Eduardo'
            onChange={handleChange}
            value={formData.name}
          />
          <label className='text-lg font-medium' htmlFor="email">What email do I reply to?</label>
          <input
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='correo@correo.com'
            type="email"
            name='email'
            onChange={handleChange}
            value={formData.email}
          />
          <label className='text-lg font-medium' htmlFor="message">I will reply to you within an hour :)</label>
          <textarea
            className='h-40 resize-none w-full p-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            name="message"
            id="message"
            placeholder='Your message'
            onChange={handleChange}
            value={formData.message}
          />
        </fieldset>
        <button type='submit' className='font-medium text-white mt-2 py-2 px-4 w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-md'>Sumbit</button>
      </form>
      {loading && <p className='text-center font-medium text-lg text-green-500'>Loading...</p>}
      {alert.msg && <Alert msg={alert.msg} error={alert.error} />}
    </section>
  )
}

export default ContactPage