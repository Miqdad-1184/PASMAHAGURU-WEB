import React from 'react'

const CardClass = ({image, name, number}) => {
  return (
    <div className='w-full max-w-sm bg-white rounded-lg shadow-md hover:-translate-y-2 transition-all ease-out hover:shadow-xl duration-300'>
        <img className='rounded-t-lg w-full h-48 object-cover' src={image} alt='Class Image' />
        <div className='p-6 text-center'>
            <h2 className='text-xl font-bold text-[#1A472A] mb-2'>{name}</h2>
            <h3 className='text-xl text-gray-400'>{number}</h3>
        </div>
    </div>
  )
}

export default CardClass