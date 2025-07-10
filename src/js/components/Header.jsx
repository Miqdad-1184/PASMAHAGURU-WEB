import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 px-10 text-green-900 border-b-1 border-gray-200'>
        <h1 className='font-bold'>P.A.S Mahaguru</h1>
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