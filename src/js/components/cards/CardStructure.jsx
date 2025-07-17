import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const CardStructure = ({name, status}) => {
  return (
    <div className='w-70 flex flex-col items-center justify-center gap-5 bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <span><FaUserCircle className='text-7xl'/></span>
        <div className='text-center'>
            <h3 className='text-xl font-bold text-[#1A472A]'>{name}</h3>
            <p className='text-gray-600'>{status}</p>
        </div>
    </div>
  )
}

export default CardStructure