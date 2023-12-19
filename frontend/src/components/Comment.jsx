'use client'

import { AuthContext } from '@/contexts/authContext'
import { useContext } from 'react'
import { deleteComment } from '../api/comments.api'
import { authFunctions } from '@/ulits/auth'

function Comment({ comment, getAllComments }) {
  const { user } = useContext(AuthContext)

  if (comment.createdAt) {
    const data = comment.createdAt
    const newDate = data.split('T')[0]
    comment.createdAt = newDate
  }

  const deleteOneComment = async (id) => {
    try {
      const jwt = authFunctions.getJWT()
      const response = await deleteComment(id, jwt)
      if (response.error) {
        throw new Error(response.error)
      } else {
        getAllComments()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <li key={comment.comment_id} className='text-left font-medium p-4 rounded-md shadow-lg bg-gray-200 flex flex-col md:flex-row md:justify-between justify-center'>
      <div>
        <h4 className={`${comment.User.admin ? 'font-bold text-red-500' : 'font-medium'}`}>{comment.User.first_name} <span className='font-light text-black'>- {comment.createdAt}</span></h4>
        <p className='font-normal'>{comment.content}</p>
      </div>
      {user.isAdmin && <button onClick={() => deleteOneComment(comment.comment_id)} className='mt-2 font-medium text-white py-2 px-4 w-20 text-center bg-red-500 hover:bg-red-400 active:bg-red-600 rounded-md'>Delete</button>}
    </li>
  )
}

export default Comment