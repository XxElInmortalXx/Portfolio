'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getBlog, editBlog } from '../../../../api/blogs.api'
import Alert from '@/components/Alert'
import { authFunctions } from '@/ulits/auth'

function EditPostPage({ params }) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    content: '',
  })
  const [alert, setAlert] = useState({
    msg: '',
    error: true
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
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
      const response = await editBlog(params.id, formData, jwt)
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

  const getOneBlog = async() => {
    const response = await getBlog(params.id)
    setFormData({
      title: response.blog.title,
      subtitle: response.blog.subtitle,
      content: response.blog.content
    })
  }
  

  useEffect(() => {
    getOneBlog()
  }, [])
  return (
    <section
      className='w-[90%] mx-auto container max-w-lg'
    >
      <h1 className='pt-8 text-4xl font-bold text-center'>Admin Page</h1>
      <p className='text-center mb-4'>Here you can edit your post</p>
      <Link className='inline-block my-2 max-w-lg mx-auto text-base text-white text-center py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-400 active:bg-blue-600 font-medium' href={{ pathname: '/admin' }}>Back to Admin</Link>
      <form onSubmit={handleSubmit} className='max-w-lg mx-auto w-full bg-white rounded-md shadow-lg p-8'>
        <fieldset>
          <legend className='text-center py-4 text-xl text-gray-500'>Edit Post</legend>
          <label className='text-lg font-medium' htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='Title of post'
            onChange={handleChange}
            value={formData.title}
          />
          <label className='text-lg font-medium' htmlFor="subtitle">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='Subtitle of post'
            onChange={handleChange}
            value={formData.subtitle}
          />
          <label className='text-lg font-medium' htmlFor="content">Content</label>
          <textarea
            type="text"
            name="content"
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
            placeholder='Content of post'
            onChange={handleChange}
            value={formData.content}
          />
        </fieldset>
        <button
          type='submit'
          className='mt-2 font-medium text-white py-2 px-4 w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-md'
        >
          Edit Post
        </button>
      </form>
      {loading && <p className="p-8 text-center font-medium">Loading...</p>}
      {alert.msg !== '' && <Alert msg={alert.msg} error={alert.error} />}
    </section>
  )
}

export default EditPostPage