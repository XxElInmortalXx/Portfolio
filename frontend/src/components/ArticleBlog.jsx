'use client'

import { AuthContext } from '@/contexts/authContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { deleteBlog } from '../api/blogs.api'
import { authFunctions } from '@/ulits/auth'

function ArticleBlog({ blog = {}, getAllBlogs }) {
  const { user } = useContext(AuthContext)


  if (Object.keys(blog).length > 0) {
    const date = blog.createdAt
    blog.createdAt = date.split('T')[0]
  }

  const handleDeleteClick = async (id) => {
    const jwt = await authFunctions.getJWT()
    await deleteBlog(id, jwt)
    getAllBlogs()
  }
  return (
    <section
      href={{ pathname: '/blog/id' }}
      className='p-8 block transition-all duration-300 text-left space-y-2 shadow-lg rounded-md bg-white overflow-hidden'
    >
      {Object.keys(blog).length > 0 && (
        <>
          <h3 className='font-bold text-xl uppercase'>{blog.title}</h3>
          <p className='text-gray-500 font-medium'>{blog.createdAt} | {blog.subtitle}</p>
          <p>{blog.content}</p>
        </>
      )}
      <div className='flex flex-col gap-2 md:flex-row'>
        <Link href={{ pathname: `/blog/${blog.blog_id}` }} className='inline-block py-2 px-4 bg-blue-500 font-medium text-white rounded-md hover:bg-blue-400 active:bg-blue-600 text-center'>Read more</Link>
        {/* Mostrar botón de editar y eliminar solo cuando el usuario admin este logueado */}
        {user.isAdmin && (
          <>
            <Link href={{ pathname: `/admin/edit-blog/${blog.blog_id}` }} className='inline-block py-2 px-4 bg-green-500 font-medium text-white rounded-md hover:bg-green-400 active:bg-green-600 text-center'>Edit</Link>
            <button onClick={() => handleDeleteClick(blog.blog_id)} className='inline-block py-2 px-4 bg-red-500 font-medium text-white rounded-md hover:bg-red-400 active:bg-red-600 text-center'>Delete</button>
          </>
        )}
      </div>
    </section>
  )
}

export default ArticleBlog