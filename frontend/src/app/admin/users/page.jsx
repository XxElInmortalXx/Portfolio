'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getUsers, deleteUser } from '../../../api/users.api'
import Alert from '@/components/Alert'
import { authFunctions } from '@/ulits/auth'

function UsersPage() {
  const [users, setUsers] = useState([])
  const [alert, setAlert] = useState({
    msg: '',
    error: true
  })
  const [loading, setLoading] = useState(false)

  const getAllUsers = async () => {
    setLoading(true)
    try {
      const jwt = authFunctions.getJWT()
      const response = await getUsers(jwt)
      setUsers(response.users)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const deleteOneUser = async (id) => {
    try {
      const jwt = authFunctions.getJWT()
      const response = await deleteUser(id, jwt)
      if (response.error) {
        setAlert({
          msg: response.msg,
          error: true
        })
      } else {
        setAlert({
          msg: response.msg,
          error: false
        })
      }
      await getAllUsers()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <section className='w-[90%] mx-auto container max-w-lg'>
      <h1 className='pt-8 text-4xl font-bold text-center'>Admin Page</h1>
      <p className='text-center mb-4'>Here you can manage users</p>
      <Link className='inline-block my-2 max-w-lg mx-auto text-base text-white text-center py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-400 active:bg-blue-600 font-medium' href={{ pathname: '/admin' }}>Back to Admin</Link>
      <table className='w-full border-2 rounded-lg'>
        <thead className='text-left'>
          <tr className='border-b'>
            <th className='p-2'>First Name</th>
            <th className='p-2'>Last Name</th>
            <th className='p-2'>Email</th>
            <th className='p-2'>Action</th>
          </tr>
        </thead>
        <tbody className='text-left'>
          {users.length > 0 ? (users.map((user) => (
            <tr key={user.user_id} className='border-b'>
              <td className='p-2'>{user.first_name}</td>
              <td className='p-2'>{user.last_name}</td>
              <td className='p-2'>{user.email}</td>
              <td className='p-2'>
                <button className='font-medium text-white bg-red-500 py-1 px-4 rounded-md hover:bg-red-400 active:bg-red-600'
                onClick={() => deleteOneUser(user.user_id)}>Delete</button></td>
            </tr>
          ))) : (
            loading ? <tr>
              <td className='p-2'>Loading...</td>
              </tr> :
            <tr>
              <td className='p-2'>No users</td>
            </tr>
          )}
        </tbody>
      </table>
      {alert.msg !== '' && <Alert error={alert.error} msg={alert.msg} />}
    </section>
  )
}

export default UsersPage