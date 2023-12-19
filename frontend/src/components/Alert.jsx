import React from 'react'

function Alert({ msg, error }) {
  return (
    <div className={`w-full my-2 p-2 text-white text-base font-medium mb-4 rounded-md text-center ${error ? 'bg-red-500' : 'bg-green-500'}`}>{msg}</div>
  )
}

export default Alert