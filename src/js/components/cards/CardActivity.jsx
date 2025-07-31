import React from 'react'
import Image from '../../../assets/hero.webp'

const CardActivity = ({title, description, imageUrl, date}) => {
  return (
    <div className='flex w-70 flex-col items-center justify-center gap-2 bg-white rounded-lg shadow-lg hover:-translate-y-2 transition-all ease-out hover:shadow-xl duration-300'>
        <img src={imageUrl} alt="gambar kegiatan" className='rounded-t-lg h-40 w-full' />
        <div className='flex flex-col gap-2 px-5 py-3 text-start'>
            <h2 className='text-lg font-bold text-[#FFD700]'>{date}</h2>
            <h1 className='text-xl font-bold text-[#1A472A]'>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default CardActivity