'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { confirmUser } from '../../../../api/users.api'

function VerifyAccountPage({ params }) {
  const [isConfirmed, setIsConfirmed] = useState(true)

  const verifyAccount = async () => {
    try {
      const response = await confirmUser(params.id)
      if (response.error) {
        setIsConfirmed(false)
      } else {
        setIsConfirmed(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    verifyAccount()
  }, [])
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <h2 className='pt-8 text-4xl font-bold text-center mb-4'>Verify acoount</h2>
      {isConfirmed ? (
        <>
          <p className='text-center font-medium text-lg text-green-500'>Success, your account is verified</p>
          <Link className='block max-w-lg mx-auto rounded-lg text-base text-white mt-2 bg-blue-500 p-2 text-center font-medium hover:bg-blue-400 active:bg-blue-600' href={{ pathname: '/login' }}>Login</Link>
        </>
      ) : (
        <>
          <p className='text-center font-medium text-lg text-red-500'>Oh no, your account is not verified, please check your email and click on the link</p>
          <Link className='block max-w-lg mx-auto rounded-lg text-base text-white bg-blue-500 mt-2 p-2 text-center font-medium hover:bg-blue-400 active:bg-blue-600' href={{ pathname: '/register' }}>Register</Link>
        </>
      )}
    </section>
  )
}

export default VerifyAccountPage