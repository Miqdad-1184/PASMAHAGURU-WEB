import React from 'react'

const CardAbout = ({title, text}) => {
  return (
    <div className='p-6 bg-[#F5F5DC] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <h2 className='text-2xl font-bold text-center text-[#1A472A]'>{title}</h2>
        <p className='text-center mt-5'>{text}</p>
    </div>
  )
}

export default CardAbout