import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import CardClass from '../components/cards/CardClass.jsx'

const Class = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const SHEET_BEST_API_URL = import.meta.env.VITE_SHEET_CLASS_URL;

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(SHEET_BEST_API_URL);
        setClasses(response.data); 
      } catch (err) {
        console.error("Gagal mengambil daftar angkatan:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);
  return (
    <div>
        <header>
            <Header />
        </header>
        <main className='flex flex-col items-center justify-center bg-gray-100 py-10 px-4'>
            <section className='flex flex-col items-center justify-center gap-5 py-20'>
                <h1 className='text-center text-[#1A472A] md:text-5xl text-3xl font-bold mt-10'>Generasi P.A.S Mahaguru</h1>
            </section>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {loading && <p>Memuat daftar angkatan...</p>}
                {error && <p>Terjadi kesalahan saat memuat daftar angkatan: {error.message || 'Periksa koneksi atau URL API.'}</p>} 
          
                {classes.length > 0 ? (
                    classes.map((classes, index) => (
                        <CardClass
                        key={index}
                        image={classes.foto} 
                        name={classes.angkatan}
                        number={classes.urutan}
                        />
                    ))
                ) : (
                !loading && !error && <p>Tidak ada aktivitas yang ditemukan.</p>
                )}
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Class