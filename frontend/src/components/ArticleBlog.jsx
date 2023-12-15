import Link from 'next/link'
import React from 'react'

function ArticleBlog() {
  return (
    <section
      href={{ pathname: '/blog/id' }}
      className='p-8 block transition-all duration-300 text-left space-y-2 shadow-lg rounded-md bg-white overflow-hidden'
    >
      <h3 className='font-medium text-xl'>UI Interactions of the week</h3>
      <p className='text-gray-500'>12 Feb 2019 | Express, Handlebars</p>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <div className='flex flex-col gap-2 md:flex-row'>
        <Link href={{ pathname: '/blog/id' }} className='inline-block py-2 px-4 bg-blue-500 font-medium text-white rounded-md hover:bg-blue-400 active:bg-blue-600 text-center'>Read more</Link>
        {/* Mostrar botón de editar y eliminar solo cuando el usuario admin este logueado */}
        <Link href={{ pathname: '/blog/edit/id' }} className='inline-block py-2 px-4 bg-green-500 font-medium text-white rounded-md hover:bg-green-400 active:bg-green-600 text-center'>Edit</Link>
        <button className='inline-block py-2 px-4 bg-red-500 font-medium text-white rounded-md hover:bg-red-400 active:bg-red-600 text-center'>Delete</button>
      </div>
    </section>
  )
}

export default ArticleBlog