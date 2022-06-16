import React from 'react'
import illustration from '../images/undraw_programming_re_kg9v.svg'

const Header = () => (
  <header className='bg-stone-200'>
    <div className='container mx-auto p-12 max-w-4xl flex justify-center items-center'>
      <div className='flex-1'>
        <h1 className='text-6xl font-bold text-blue-500'>¡Hola! Soy Gustavo</h1>
        <p className='text-xl font-light'>Desarrollador Javascript fullstack</p>
      </div>

      <img src={illustration} alt="header illustration" style={{height: '300px'}}/>
    </div>
  </header>
)

export default Header;
