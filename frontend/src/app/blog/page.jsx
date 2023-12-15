import ArticleBlog from '@/components/ArticleBlog'
import React from 'react'

function BlogPage() {
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <h2 className='py-8 text-4xl font-bold text-center md:text-left'>Blog</h2>
      <div className='space-y-4'>
        <ArticleBlog />
        <p className='p-8 text-center font-medium shadow-lg rounded-md capitalize'>
          Did not publish blogs
        </p>
      </div>
    </section>
  )
}

export default BlogPage