import React from 'react'

const HeroHome = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 bg-[#F8F9FA] py-38 px-4'>
        <h2 className='md:text-5xl font-bold mt-10 text-[#1A472A] text-center text-3xl'>Selamat datang di P.A.S Mahaguru</h2>
        <p className='mt-4 md:text-2xl md:w-2/4 text-center'>Pecinta Alam Sejati Mahasiswa Keguruan (P.A.S Mahaguru). Menjelajahi Alam, Membentuk Karakter, Mengabdi pada Masyarakat.</p>
        <button className='py-4 px-8 bg-[#1A472A] rounded-full text-white font-bold '><a href="#about">Jelajahi lebih lanjut</a></button>
    </div>
  )
}

export default HeroHome