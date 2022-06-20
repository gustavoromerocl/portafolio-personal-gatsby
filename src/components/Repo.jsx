import React from 'react'

const Repo = ({data}) => (
  <li className='flex items-center'>
    <div className='w-10/12 overflow-x-hidden'>
      {/* truncate ayuda a el elemento en caso de faltarle espacio a no desplazarse hacia abajo */}
      <h4 className='text-blue-600 font-bold truncate'>{data.name}</h4>
      <p className='text-sm text-gray-800 overflow-y-hidden' style={{height: "1.5rem"}}>{data.description}</p>
      
    </div>
    <div className='flex-1 text-right'>
      <a href={data.html_url} target='_blank' rel='noopener noreferer'>Ver</a>
    </div>
    
  </li>
)

export default Repo