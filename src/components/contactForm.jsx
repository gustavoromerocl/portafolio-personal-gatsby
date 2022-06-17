import React from 'react'

const contactForm = () => (
  <form className='mt-16 text-center'>
    <label
      id='contact-content'
      name="contact-content"
      htmlFor=""
      className='block text-gray-700 text-sm font-bold mb-2'>Texto por definir</label>
    <div className='flex rounded bg-white border p-2'>
      <textarea
        id='contact-content'
        name="contact-content"
        className='flex-1 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-md'></textarea>
      <button className='btn'>Enviar</button>
    </div>

  </form>
)


export default contactForm