import React from 'react'

function ContactPage() {
  return (
    <section className='w-[90%] mx-auto container max-w-4xl'>
      <h2 className='pt-8 text-4xl font-bold text-center'>Contact</h2>
      <p className='text-center py-4'>Let's connect to collaborate</p>
      <form className='max-w-lg mx-auto'>
        <fieldset>
          <legend className='text-center font-medium text-2xl'>let's talk</legend>
          <label className='text-lg font-medium' htmlFor="name">What is your name</label>
          <input
            type="text"
            name='name'
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500' placeholder='Andres Eduardo'
            />
          <label className='text-lg font-medium' htmlFor="email">What email do I reply to?</label>
          <input
            className='w-full p-2 mb-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500' 
            placeholder='correo@correo.com'
            type="email"
            name='email'
          />
          <label className='text-lg font-medium' htmlFor="message">I will reply to you within an hour :)</label>
          <textarea name="message" id="message" placeholder='Your message' className='h-40 resize-none w-full p-2 border outline-none rounded-md shadow-md bg-white placeholder-gray-500'></textarea>
        </fieldset>
        <button type='submit' className='font-medium text-white mt-2 py-2 px-4 w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-md'>Sumbit</button>
      </form>
    </section>
  )
}

export default ContactPage