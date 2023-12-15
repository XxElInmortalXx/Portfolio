import Link from 'next/link'
import React from 'react'

function BlogPageId() {
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <Link className='py-2 px-4 bg-blue-500 font-medium text-white text-center rounded-md hover:bg-blue-400 active:bg-blue-600 inline-block my-4' href={{ pathname: '/blog' }}>Back to blogs</Link>
      <article className='p-8 text-left space-y-2 shadow-lg rounded-md bg-white overflow-hidden'>
        <h3 className='font-medium text-xl'>UI Interactions of the week</h3>
        <p className='text-gray-500'>12 Feb 2019 | Express, Handlebars</p>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <h3 className='font-medium text-lg'>Comments</h3>
        <div className='space-y-4'>
          <form>
            <input
              type="text"
              name="comment"
              className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'
              placeholder='Write your comment'
            />
            <button
              type='submit'
              className='mt-2 font-medium text-white py-2 px-4 w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-md'
            >
              Add Comment
            </button>
          </form>
          <section
            className='text-left font-medium p-4 rounded-md shadow-lg bg-gray-200'
          >
            <h4>Name User - <span className='font-light'>12/12/23</span></h4>
            <p className='font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, velit?</p>
          </section>
          <p className='text-center font-medium p-4 rounded-md shadow-lg bg-gray-200'>
            There are no comments
          </p>
        </div>
      </article>
    </section>
  )
}

export default BlogPageId