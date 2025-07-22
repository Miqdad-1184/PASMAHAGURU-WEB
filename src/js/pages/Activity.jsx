import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import CardActivity from '../components/cards/CardActivity.jsx';

const Activity = () => {
  // const [activities, setActivities] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const SHEET_BEST_API_URL = import.meta.env.VITE_SHEET_ACTIVITY_URL;

  // useEffect(() => {
  //   const fetchActivities = async () => {
  //     try {
  //       const response = await axios.get(SHEET_BEST_API_URL);
  //       setActivities(response.data.reverse()); 
  //     } catch (err) {
  //       console.error("Gagal mengambil aktivitas:", err);
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchActivities();
  // }, []);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='bg-[#F8F9FA] flex flex-col items-center justify-center gap-5 py-38 px-4'>
        <section className='flex flex-col items-center justify-center gap-5'>
          <h1 className='text-center text-[#1A472A] md:text-5xl text-3xl font-bold mt-10'>Aktivitas Kami</h1>
          <p className='text-center md:text-xl mt-5 md:w-3/4'>Aktivitas kami mencakup berbagai kegiatan kepecintaalaman, pelatihan, dan pengabdian masyarakat yang bertujuan untuk membentuk karakter dan meningkatkan keterampilan anggota.</p>
        </section>
        
        <section className='flex flex-row flex-wrap items-center justify-center gap-5 pt-20'>
          {/* {loading && <p>Memuat aktivitas...</p>}
          {error && <p>Terjadi kesalahan saat memuat aktivitas: {error.message || 'Periksa koneksi atau URL API.'}</p>} 
          
          {activities.length > 0 ? (
            activities.map((activity, index) => (
              <CardActivity 
                key={index}
                title={activity.judul} 
                date={activity.tanggal}
                description={activity.deskripsi}
                imageUrl={activity.foto}
              />
            ))
          ) : (
            !loading && !error && <p>Tidak ada aktivitas yang ditemukan.</p>
          )} */}
          <CardActivity/>
          <CardActivity/>
          <CardActivity/>
          <CardActivity/>
          <CardActivity/>
          <CardActivity/>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Activity;