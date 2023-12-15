import Link from 'next/link'
import React from 'react'

function UsersPage() {
  return (
    <section className='w-[90%] mx-auto container max-w-lg'>
      <h1 className='pt-8 text-4xl font-bold text-center'>Admin Page</h1>
      <p className='text-center mb-4'>Here you can manage users</p>
      <Link className='inline-block my-2 max-w-lg mx-auto text-base text-white text-center py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-400 active:bg-blue-600 font-medium' href={{ pathname: '/admin' }}>Back</Link>
      <table className='w-full'>
        <thead className='text-left'>
          <tr className='border-b'>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='text-left'>
          <tr className='border-b'>
            <td>Hola Mundo</td>
            <td>Hola Mundo</td>
            <td>Hola Mundo</td>
            <td>Hola Mundo</td>
            <td>
              <button>
                <i class="ri-delete-bin-6-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default UsersPage