'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getBlog } from '../../../api/blogs.api'
import { getBlogIdComments } from '../../../api/comments.api'
import FormCommentBlog from '@/components/FormCommentBlog'
import Comment from '.././../../components/Comment'
import { authFunctions } from '@/ulits/auth'

function BlogPageId({ params }) {
  const { id } = params
  
  const [blog, setBlog] = useState({})
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)

  const getOneBlog = async () => {
    setLoading(true)
    try {
      const response = await getBlog(id)
      const date = response.blog.createdAt
      response.blog.createdAt = date.split('T')[0]
      setBlog(response.blog)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const getAllComments = async () => {
    setLoading(true)
    try {
      const jwt = authFunctions.getJWT()
      const response = await getBlogIdComments(id, jwt)
      setComments(response.comments)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getOneBlog()
    getAllComments()
  }, [])
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <Link className='py-2 px-4 bg-blue-500 font-medium text-white text-center rounded-md hover:bg-blue-400 active:bg-blue-600 inline-block my-4' href={{ pathname: '/blog' }}>Back to blogs</Link>
      <article className='p-8 text-left space-y-2 shadow-lg rounded-md bg-white overflow-hidden'>
        {Object.keys(blog).length > 0 && (
          <>
            <h3 className='font-bold text-xl uppercase'>{blog.title}</h3>
            <p className='text-gray-500 font-medium'>{blog.createdAt} | {blog.subtitle}</p>
            <p>{blog.content}</p>
          </>
        )}
        <div className='space-y-4'>
          <FormCommentBlog paramsId={id} getAllComments={getAllComments} />
          {comments.length > 0 ? (
            <ul className='space-y-4'>
              {comments.map((comment) => (
                <Comment key={comment.comment_id} comment={comment} getAllComments={getAllComments} />
              ))}
            </ul>
          ) : (
            loading ? <p className="p-8 text-center font-medium">Loading...</p> :
            <p className='text-center font-medium p-4 rounded-md shadow-lg bg-gray-200'>
              There are no comments
            </p>
          )}
        </div>
      </article>
    </section>
  )
}

export default BlogPageId