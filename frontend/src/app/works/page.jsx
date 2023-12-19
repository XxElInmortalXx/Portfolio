'use client'

import Work from '@/components/Work'
import React, { useEffect, useState } from 'react'
import { getWorks } from '.././../api/works.api'

function WorkPage() {
  const [work, setWork] = useState([])
  const [loading, setLoading] = useState(false)

  const getAllWorks = async () => {
    setLoading(true)
    try {
      const response = await getWorks();
      setWork(response.works);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };

  useEffect(() => {
    getAllWorks();
  }, [])
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <h2 className='py-8 text-4xl font-bold text-center md:text-left'>Works</h2>
      <div className='space-y-4'>
        {work.length > 0 ? (work.map((work) => (
          <Work key={work.work_id} work={work} getAllWorks={getAllWorks} />
        ))) : (
          loading ? <p className="p-8 text-center font-medium">Loading...</p> :
          <p className='p-8 text-center font-medium shadow-lg rounded-md capitalize'>
            Did not publish works
          </p>
        )}
      </div>
    </section>
  )
}

export default WorkPage