import React from 'react'

function FooterLink() {
  return (
    <footer className='p-8 text-center text-4xl'>
      <div className='space-x-4'>
        <a className='text-gray-950 transition-all duration-300 hover:text-blue-500 active:text-blue-600' target='_blank' href="https://github.com/XxElInmortalXx">
          <i className="ri-github-fill"></i>
        </a>
        <a className='text-gray-950 transition-all duration-300 hover:text-blue-500 active:text-blue-600' target='_blank' href="https://www.facebook.com/andres.alpiry/">
          <i className="ri-facebook-box-fill"></i>
        </a>
        <a className='text-gray-950 transition-all duration-300 hover:text-blue-500 active:text-blue-600' target='_blank' href="https://www.linkedin.com/in/andres-eduardo-rosas-alpiri-b6635522a/">
          <i className="ri-linkedin-box-fill"></i>
        </a>
        <a className='text-gray-950 transition-all duration-300 hover:text-blue-500 active:text-blue-600' target='_blank' href="https://twitter.com/XxElInmortalXx1">
          <i className="ri-twitter-x-fill"></i>
        </a>
      </div>
      <p className='text-lg text-gray-500 mt-4'>Copyright ©2020 All rights reserved </p>
    </footer>
  )
}

export default FooterLink