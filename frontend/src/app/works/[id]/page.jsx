'use client'

import Link from 'next/link'
import imageWorkId from '@/assets/image/imageWorkId.png'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getWork } from '../../../api/works.api'
import FormCommentWork from '../../../components/FormCommentWork'
import Comment from '../../../components/Comment'
import { getWorkIdComments } from '@/api/comments.api'
import { authFunctions } from '@/ulits/auth'

function WorkPageId({ params }) {
  const [comments, setComments] = useState([])
  const [work, setWork] = useState({})
  const [loading, setLoading] = useState(false)

  const getOneWork = async () => {
    setLoading(true)
    try {
      const response = await getWork(params.id);
      const data = response.work.createdAt
      const newDate = data.split('T')[0]
      response.work.createdAt = newDate
      setWork(response.work);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  const getAllComments = async () => {
    setLoading(true)
    try {
      const jwt = authFunctions.getJWT()
      const response = await getWorkIdComments(params.id, jwt)
      setComments(response.comments)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getOneWork()
    getAllComments()
  }, [])

  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <Link className='py-2 px-4 bg-blue-500 font-medium text-white text-center rounded-md hover:bg-blue-400 active:bg-blue-600 inline-block my-4' href={{ pathname: '/works' }}>Back to works</Link>
      <div className='space-y-4'>
        <article className="p-4 shadow-md bg-white gap-4 rounded-md">
          <Image className="w-full min-w-[200px] max-h-96 object-cover rounded-md" src={work.image_url || imageWorkId} priority width={500} height={500} alt="image work" />
          <section className="space-y-2 w-full">
            <h4 className="font-medium text-2xl mt-2 w-full">{work.title}</h4>
            <div className="space-x-4">
              <p className="inline-block py-1 px-4 bg-blue-950 text-white font-medium rounded-full">{work.createdAt}</p>
              <p className="inline-block text-gray-500">{work.subtitle}</p>
            </div>
          </section>
          <div className='text-left whitespace-wrap w-full mt-2'>
            {work.content}
          </div>
        </article>
        <div className='space-y-4'>
          <FormCommentWork paramsId={params.id} getAllComments={getAllComments} />
          {comments.length > 0 ? (
            <ul className='space-y-4'>
              {comments.map((comment) => (
                <Comment key={comment.comment_id} comment={comment} getAllComments={getAllComments} />
              ))}
            </ul>
          ) : (
            loading ? <p className="p-8 text-center font-medium">Loading...</p> :
            <p className='text-center font-medium p-4 rounded-md shadow-lg bg-gray-200'>
              There are no comments
            </p>
          )}
        </div>
        <p className='p-8 text-center font-medium shadow-lg rounded-md capitalize'>
          Did not publish work
        </p>
      </div>
    </section>
  )
}

export default WorkPageId