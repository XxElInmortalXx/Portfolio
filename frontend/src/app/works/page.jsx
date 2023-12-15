import Work from '@/components/Work'
import React from 'react'

function WorkPage() {
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
    <h2 className='py-8 text-4xl font-bold text-center md:text-left'>Works</h2>
    <div className='space-y-4'>
      <Work />
      <Work />
      <Work />
      <p className='p-8 text-center font-medium shadow-lg rounded-md capitalize'>
        Did not publish works
      </p>
    </div>
  </section>
  )
}

export default WorkPage