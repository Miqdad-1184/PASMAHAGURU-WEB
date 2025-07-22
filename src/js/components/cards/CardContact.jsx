import React from 'react'
import {FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaTiktok} from 'react-icons/fa'
const CardContact = () => {
  return (
    <div className='px-5'>
        <h2 className='text-2xl text-[#1A472A] font-bold mb-5'>Info Kontak</h2>
        <div className='flex flex-col items-start gap-4 md:w-100'>
            <div className='flex items-center gap-2'>
                <FaMapMarkerAlt size={50} className='text-[#1A472A]' />
                <p>Sekretariat UKM, Universitas Pendidikan Indonesia Kampus Purwakarta, Jl. Veteran No.8, Nagri Kaler, Kec. Purwakarta, Kabupaten Purwakarta, Jawa Barat 41115</p>
            </div>
            <div className='flex items-center gap-2'>
                <FaPhone className='text-[#1A472A]' />
                <p><a href="">+62 812-3456-7890</a></p>
            </div>
            <div className='flex items-center gap-2'>
                <FaEnvelope className='text-[#1A472A]' />
                <p><a href="mailto:pasmahaguru1402@gmail.com">pasmahaguru1402@gmail.com</a></p>
            </div>
            <div className='flex items-center gap-2'>
                <FaInstagram className='text-[#1A472A]' />
                <p><a href="https://instagram.com/pasmahaguruid" target="_blank" rel="noopener noreferrer">@pasmahaguruid</a></p>
            </div>
            <div className='flex items-center gap-2'>
                <FaTiktok className='text-[#1A472A]' />
                <p><a href="https://tiktok.com/@pasmahaguru1402" target="_blank" rel="noopener noreferrer">@pasmahaguru1402</a></p>
            </div>
        </div>
    </div>
  )
}

export default CardContact