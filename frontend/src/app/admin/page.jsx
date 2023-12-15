import Link from 'next/link'
import React from 'react'

function AdminPage() {
  return (
    <section
      className='w-[90%] mx-auto container max-w-4xl'
    >
      <h1 className='pt-8 text-4xl font-bold text-center'>Admin Page</h1>
      <p className='text-center mb-4'>This is the admin page</p>
      <article className='space-y-2'>
        <Link className='block max-w-lg mx-auto text-base text-white text-center py-4 px-8 rounded-md bg-blue-500 hover:bg-blue-400 active:bg-blue-600 font-medium' href={{ pathname: '/admin/new-post' }} >Create new post</Link>
        <Link className='block max-w-lg mx-auto text-base text-white text-center py-4 px-8 rounded-md bg-blue-500 hover:bg-blue-400 active:bg-blue-600 font-medium' href={{ pathname: '/admin/new-work' }} >Create new work</Link>
        <Link className='block max-w-lg mx-auto text-base text-white text-center py-4 px-8 rounded-md bg-blue-500 hover:bg-blue-400 active:bg-blue-600 font-medium' href={{ pathname: '/admin/users' }} >Manage users</Link>
      </article>
    </section>
  )
}

export default AdminPage