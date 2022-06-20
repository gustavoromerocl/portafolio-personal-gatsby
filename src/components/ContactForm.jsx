import React from 'react'

const ContactForm = () => (
  <form className='mt-16 text-center'>
    <label
      htmlFor="contact-content"
      className='block text-gray-700 text-sm font-bold mb-2'>
        Cuéntame de esa idea que quieres realizar
      </label>
    <div className='flex rounded bg-white border p-2'>
      <textarea
        id='contact-content'
        name="contact-content"
        className='flex-1 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-md'></textarea>
      <button className='btn ml-4'>Enviar</button>
    </div>

  </form>
)


export default ContactForm