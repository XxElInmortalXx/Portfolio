'use client'

import React, { useState } from 'react'
import { createCommentBlog } from '../api/comments.api'
import Alert from './Alert'
import { authFunctions } from '@/ulits/auth'

function FormComment({ paramsId, getAllComments }) {

  const [formData, setFormData] = useState({
    content: ''
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
      const jwt = authFunctions.getJWT()
      const response = await createCommentBlog(paramsId, formData, jwt)
      if (response.error) {
        setAlert({
          msg: response.msg,
          error: true
        })
        setTimeout(() => {
          setAlert({
            msg: '',
            error: true
          })
        }, 3000);
      } else {
        getAllComments()
        setAlert({
          msg: response.msg,
          error: false
        })
        setFormData({
          content: ''
        })
        setTimeout(() => {
          setAlert({
            msg: '',
            error: true
          })
        }, 3000);
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className='text-center md:text-left text-lg font-medium py-4'>Comments</legend>
          <input
            type="text"
            name="content"
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='Write your comment'
            value={formData.content}
            onChange={handleChange}
          />
        </fieldset>
        <button
          type='submit'
          className='mt-2 font-medium text-white py-2 px-4 w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-md'
        >
          Add Comment
        </button>
      </form>
      {loading && <p className="p-8 text-center font-medium">Loading...</p>}
      {alert.msg !== '' && <Alert msg={alert.msg} error={alert.error} />}
    </>
  )
}

export default FormComment