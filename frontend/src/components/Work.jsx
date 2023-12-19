'use client'

import imageWork from '../assets/image/imageWork.png'
import Image from 'next/image'
import React, { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '@/contexts/authContext'
import { deleteWork } from '../api/works.api'
import { authFunctions } from '../ulits/auth'

function Work({ work = {}, getAllWorks }) {
  const { user } = useContext(AuthContext)

  if (work.createdAt) {
    const date = work.createdAt
    const newDate = date.split('T')[0]
    work.createdAt = newDate
  }

  const handleDeleteClick = async (id) => {
    const jwt = authFunctions.getJWT()
    await deleteWork(id, jwt)
    getAllWorks()
  }

  return (
    <article className="p-4 shadow-md bg-white sm:flex gap-4 sm:items-center rounded-md">
      <Image className="w-full sm:max-w-[180px] max-h-52 sm:max-h-32 object-cover rounded-md" priority src={work.image_url || imageWork} width={200} height={200} alt="image work" />
      <section className="space-y-2 w-full">
        <h4 className="font-medium text-2xl mt-2 sm:mt-0 text-ellipsis overflow-hidden whitespace-nowrap sm:w-60 w-60">{work.title}</h4>
        <div className="space-x-4">
          <p className="inline-block py-1 px-4 bg-blue-950 text-white font-medium rounded-full">{work.createdAt}</p>
          <p className="inline-block text-gray-500">{work.subtitle}</p>
        </div>
      </section>
      <div className='flex flex-col space-y-2'>
        <Link href={{ pathname: `/works/${work.work_id}` }} className="w-full mt-2 sm:mt-0 sm:w-28 py-2 px-4 bg-blue-500 font-medium text-white rounded-md hover:bg-blue-400 active:bg-blue-600 text-center">Read more</Link>
        {/* Mostrar botón de editar y eliminar solo cuando el usuario admin este logueado */}
        {user.isAdmin && (
          <>
            <Link href={{ pathname: `/admin/edit-work/${work.work_id}` }} className="w-full mt-2 sm:mt-0 sm:w-28 py-2 px-4 bg-green-500 font-medium text-white rounded-md hover:bg-green-400 active:bg-green-600 text-center">Edit</Link>
            <button onClick={() => handleDeleteClick(work.work_id)} className='inline-block py-2 px-4 bg-red-500 font-medium text-white rounded-md hover:bg-red-400 active:bg-red-600 text-center'>Delete</button>
          </>
        )}
      </div>
    </article>
  )
}

export default Work