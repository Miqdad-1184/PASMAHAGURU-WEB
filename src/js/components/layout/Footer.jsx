import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok , FaMapPin, FaPhone, FaEnvelope} from 'react-icons/fa'
import Logo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-[#1A472A] flex flex-col gap-8 py-8 px-5 text-white justify-between flex-wrap
                    md:flex-row md:px-40 md:py-5 md:gap-5'>
        <div className='flex flex-col items-center text-center md:items-start md:text-left'>
            <div className='flex flex-row items-center gap-2 mb-2 md:mb-0'>
                <img src={Logo} alt="" className='w-16 md:w-20'/>
                <h2 className='font-bold text-xl md:text-2xl'>P.A.S Mahaguru</h2> 
            </div>
            <p className='text-sm max-w-xs mx-auto md:w-100 md:text-base md:mx-0'>
              Unit Kegiatan Mahasiswa Pecinta Alam Sejati Mahasiswa Keguruan Universitas Pendidikan Indonesia.
            </p>
        </div>

        <div>
            <h2 className='text-[#FFD700] font-bold text-lg w-30 md:text-xl mb-4 border-b-2 md:border-b-3 border-white pb-1'>Link Cepat</h2>
            <nav>
                <ul className='flex flex-col gap-3'>
                    <li>
                        <Link className='hover:text-[#FFD700]'>Beranda</Link>
                    </li>
                    <li>
                        <Link className='hover:text-[#FFD700]'>Aktivitas</Link>
                    </li>
                    <li>
                        <Link className='hover:text-[#FFD700]'>Daftar Angkatan</Link>
                    </li>
                    <li>
                        <Link className='hover:text-[#FFD700]'>Galeri</Link>
                    </li>
                    <li>
                        <Link className='hover:text-[#FFD700]'>Kontak</Link>
                    </li>
                </ul>
            </nav>
        </div>

        <div className='w-full md:w-50'> 
            <h2 className='text-[#FFD700] font-bold text-lg w-30 md:w-40 md:text-xl mb-4 border-b-2 md:border-b-3 border-white pb-1'>Kontak Kami</h2>
            <ul className='flex flex-col gap-3 text-sm md:text-base'>
                <li className='flex flex-row gap-3 items-start'>
                  <FaMapPin size={15} className='text-[#FFD700] min-w-[25px] md:size={40}'/> 
                  Jl. Veteran No.8, Nagri Kaler, Kec. Purwakarta, Kabupaten Purwakarta, Jawa Barat 41115
                </li>
                <li className='flex flex-row items-center gap-3'>
                  <FaPhone size={15} className='text-[#FFD700]'/>08512345678
                </li>
                <li className='flex flex-row items-center gap-3'>
                  <FaEnvelope className='text-[#FFD700]'/>pasmahaguru@gmail.com
                </li>
            </ul>
        </div>


        <div>
            <h2 className='text-[#FFD700] font-bold text-lg w-30 md:text-xl mb-4 border-b-2 md:border-b-3 border-white pb-1'>Ikuti kami</h2>
            <ul className='flex flex-row gap-4 md:justify-start'> 
                <li className='w-9 h-9 rounded-full bg-[#FFD700] flex justify-center items-center md:w-10 md:h-10'>
                    <a href="https://www.instagram.com/pasmahaguruid?igsh=MW14ZnBmcjhnYXRjdw=="><FaInstagram size={22} className='text-center md:size={25}'/></a>
                </li>
                <li className='w-9 h-9 rounded-full bg-[#FFD700] flex justify-center items-center md:w-10 md:h-10'>
                    <a href="" className=''><FaTiktok size={22} md:size={25}/></a>
                </li>
                <li className='w-9 h-9 rounded-full bg-[#FFD700] flex justify-center items-center md:w-10 md:h-10'>
                    <a href=""><FaFacebook size={22} md:size={25}/></a>
                </li>
            </ul>
        </div>
        <div className='border-t border-gray-400 w-full text-center py-4 mt-4 md:py-2'>
            <h2 className='text-sm md:text-base'>© 2025 P.A.S Mahaguru. Seluruh Hak Cipta Dilindungi.</h2>
        </div>
    </div>
  )
}

export default Footer