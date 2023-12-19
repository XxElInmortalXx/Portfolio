'use client'

import ArticleBlog from '@/components/ArticleBlog'
import React, { useEffect, useState } from 'react'
import { getBlogs } from '../../api/blogs.api'

function BlogPage({ params }) {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)

  const getAllBlogs = async () => {
    setLoading(true)
    try {
      const response = await getBlogs();
      setBlogs(response.blogs);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };

  useEffect(() => {
    getAllBlogs();
  }, [])
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <h2 className='py-8 text-4xl font-bold text-center md:text-left'>Blog</h2>
      <div className='space-y-4'>
        {Object.keys(blogs).length > 0 ? blogs.map((blog) => (
          <ArticleBlog
            key={blog.blog_id}
            blog={blog}
            getAllBlogs={getAllBlogs}
          />
        )) : (
          loading ? <p className="p-8 text-center font-medium">Loading...</p> :
          <p className='p-8 text-center font-medium shadow-lg rounded-md capitalize'>
            Did not publish blogs
          </p>
        )}
      </div>
    </section>
  )
}

export default BlogPage