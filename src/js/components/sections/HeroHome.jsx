import React from 'react'

const HeroHome = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 bg-[#1A472A] py-38 px-4 '>
        <h2 className='md:text-5xl font-bold mt-10 text-[#FFD700] text-center text-3xl'>Selamat datang di P.A.S Mahaguru</h2>
        <p className='mt-4 md:text-2xl md:w-2/4 text-center text-white'>Pecinta Alam Sejati Mahasiswa Keguruan (P.A.S Mahaguru). Menjelajahi Alam, Membentuk Karakter, Mengabdi pada Masyarakat.</p>
        <button className='py-4 px-8 bg-[#FFD700] rounded-full text-[#1A472A] font-bold '><a href="#about">Jelajahi lebih lanjut</a></button>
    </div>
  )
}

export default HeroHome