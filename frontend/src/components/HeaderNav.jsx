'use client'

import React, { useState } from 'react'
import Link from "next/link";

function HeaderNav() {
  const [navBar, setNavBar] = useState(false)

  const handleNavBar = () => {
    setNavBar(!navBar)
  }
  return (
    <header>
      <div className="fixed flex top-0 p-4 justify-between items-center h-16 shadow-md bg-white w-full z-20 md:hidden">
        <Link href={{pathname: '/'}} className='font-bold text-xl'>Portfolio</Link>
        <button onClick={handleNavBar}>
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>
      <nav className={`transition-all duration-300 fixed z-10 bg-white shadow-md w-full p-8 md:p-4 left-0 ${navBar ? 'top-16 md:top-0' : '-top-40 md:top-0'}`}>
        <div className='md:flex md:justify-between md:max-w-6xl md:mx-auto md:container md:w-[90%] md:items-center'>
        <Link href={{pathname: '/'}} className='font-bold text-xl transition-all duration-300 hover:text-gray-500 active:text-gray-950'>Portfolio</Link>
        <ul className="text-left font-medium text-lg md:flex md:gap-4 md:justify-end md:items-center">
          <li>
            <Link className='transition-all duration-300 hover:text-gray-500 active:text-gray-950' href={{ pathname: '/works' }}>Works</Link>
          </li>
          <li>
            <Link className='transition-all duration-300 hover:text-gray-500 active:text-gray-950' href={{ pathname: '/blog' }}>Blog</Link>
          </li>
          <li className='mb-2 md:mb-0'>
            <Link className='transition-all duration-300 hover:text-gray-500 active:text-gray-950' href={{ pathname: '/contact' }}>Contact</Link>
          </li>
          <Link className="block py-1 px-4 bg-green-500 text-white text-center rounded-md hover:bg-green-400 active:bg-green-600" href={{ pathname: '/login' }}>Login</Link>
        </ul>
        </div>
      </nav>

    </header>
  )
}

export default HeaderNav