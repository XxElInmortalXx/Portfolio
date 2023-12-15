import imageWork from '../assets/image/imageWork.png'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function Work() {
  return (
    <article className="p-4 shadow-md bg-white sm:flex gap-4 sm:items-center rounded-md">
      <Image className="w-full sm:max-w-[180px] max-h-52 sm:max-h-32 object-cover rounded-md" priority src={imageWork} width={200} height={200} alt="image work" />
      <section className="space-y-2 w-full">
        <h4 className="font-medium text-2xl mt-2 sm:mt-0 text-ellipsis overflow-hidden whitespace-nowrap sm:w-60 w-60">Designing Dashboards</h4>
        <div className="space-x-4">
          <p className="inline-block py-1 px-4 bg-blue-950 text-white font-medium rounded-full">2020</p>
          <p className="inline-block text-gray-500">Dashboard</p>
        </div>
      </section>
      <div className='flex flex-col space-y-2'>
        <Link href={{ pathname: '/works/id' }} className="w-full mt-2 sm:mt-0 sm:w-28 py-2 px-4 bg-blue-500 font-medium text-white rounded-md hover:bg-blue-400 active:bg-blue-600 text-center">Ver más</Link>
        {/* Mostrar botón de editar y eliminar solo cuando el usuario admin este logueado */}
        <Link href={{ pathname: '/works/edit/id' }} className="w-full mt-2 sm:mt-0 sm:w-28 py-2 px-4 bg-green-500 font-medium text-white rounded-md hover:bg-green-400 active:bg-green-600 text-center">Edit</Link>
        <button className='inline-block py-2 px-4 bg-red-500 font-medium text-white rounded-md hover:bg-red-400 active:bg-red-600 text-center'>Delete</button>
      </div>
    </article>
  )
}

export default Work