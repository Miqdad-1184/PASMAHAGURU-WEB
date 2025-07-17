import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 px-10 text-green-900 border-b-1 border-gray-200 fixed top-0 left-0 right-0 bg-white z-50'>
        <div className='flex items-center'>
            <img src={Logo} alt="Logo" className='w-8 h-8 inline-block' />
            <h1 className='font-bold'>P.A.S Mahaguru</h1>
        </div>
        <nav className='flex space-x-4'>
            <ul className='flex space-x-4'>
                <li>
                    <Link to="/">Beranda</Link>
                </li>
                <li>
                    <Link to="/activity">Aktivitas</Link>
                </li>
                <li>
                    <Link to="/class">Angkatan</Link>
                </li>
                <li>
                    <Link to="/gallery">Galeri</Link>
                </li>
                <li>
                    <Link to="/contact">Kontak</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header