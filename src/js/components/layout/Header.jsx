import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div ref={headerRef} className='flex justify-between items-center p-4 px-4 md:px-10 text-green-900 border-b-1 border-gray-200 fixed top-0 left-0 right-0 bg-white z-50'>
      <div className='flex items-center'>
        <img src={Logo} alt="Logo" className='w-8 h-8 inline-block' />
        <h1 className='font-bold ml-2'>P.A.S Mahaguru</h1>
      </div>

      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-green-900 focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            {isOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            )}
          </svg>
        </button>
      </div>

      <nav className={`absolute md:relative top-full left-0 right-0 md:flex flex-col md:flex-row md:space-x-4 bg-white md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} md:justify-end md:items-center p-4 md:p-0`}>
        <ul className='flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 w-full'>
          <li>
            <Link
              to="/"
              className={`font-bold block py-2 relative group ${isActive('/') ? 'text-[#FFD700]' : 'text-green-900'} hover:text-[#FFD700]`}
              onClick={() => setIsOpen(false)}
            >
              Beranda
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#FFD700] transition-all duration-300 ease-out ${isActive('/') ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
            </Link>
          </li>
          <li>
            <Link
              to="/activity"
              className={`font-bold block py-2 relative group ${isActive('/activity') ? 'text-[#FFD700]' : 'text-green-900'} hover:text-[#FFD700]`}
              onClick={() => setIsOpen(false)}
            >
              Aktivitas
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#FFD700] transition-all duration-300 ease-out ${isActive('/activity') ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
            </Link>
          </li>
          <li>
            <Link
              to="/class"
              className={`font-bold block py-2 relative group ${isActive('/class') ? 'text-[#FFD700]' : 'text-green-900'} hover:text-[#FFD700]`}
              onClick={() => setIsOpen(false)}
            >
              Angkatan
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#FFD700] transition-all duration-300 ease-out ${isActive('/class') ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`font-bold block py-2 relative group ${isActive('/gallery') ? 'text-[#FFD700]' : 'text-green-900'} hover:text-[#FFD700]`}
              onClick={() => setIsOpen(false)}
            >
              Galeri
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#FFD700] transition-all duration-300 ease-out ${isActive('/gallery') ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`font-bold block py-2 relative group ${isActive('/contact') ? 'text-[#FFD700]' : 'text-green-900'} hover:text-[#FFD700]`}
              onClick={() => setIsOpen(false)}
            >
              Kontak
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#FFD700] transition-all duration-300 ease-out ${isActive('/contact') ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;