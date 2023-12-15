import Link from 'next/link'
import imageWorkId from '@/assets/image/imageWorkId.png'
import React from 'react'
import Image from 'next/image'

function WorkPageId() {
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <h2 className='py-8 text-4xl font-bold text-center md:text-left'>Work</h2>
      <div className='space-y-4'>
        <article className="p-4 shadow-md bg-white gap-4 rounded-md">
          <Image className="w-full min-w-[200px] max-h-96 object-cover rounded-md" src={imageWorkId} width={200} height={200} alt="image work" />
          <section className="space-y-2 w-full">
            <h4 className="font-medium text-2xl mt-2 w-full">Designing Dashboard</h4>
            <div className="space-x-4">
              <p className="inline-block py-1 px-4 bg-blue-950 text-white font-medium rounded-full">2020</p>
              <p className="inline-block text-gray-500">Dashboard</p>
            </div>
          </section>
          <div className='text-left whitespace-wrap w-full mt-2'>
          </div>
        </article>
        <Link href={{ pathname: '/works' }} className="block w-full mt-2 py-2 px-4 bg-blue-500 font-medium text-white rounded-md hover:bg-blue-400 active:bg-blue-600 text-center">Back</Link>
        <p className='p-8 text-center font-medium shadow-lg rounded-md capitalize'>
          Did not publish work
        </p>
      </div>
    </section>
  )
}

export default WorkPageId