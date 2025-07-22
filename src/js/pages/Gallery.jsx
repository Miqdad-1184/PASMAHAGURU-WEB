import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CardGallery from '../components/cards/CardGallery.jsx';

const Gallery = () => {
  // const [galleryItems, setGalleryItems] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const SHEET_BEST_GALLERY_API_URL = import.meta.env.VITE_SHEET_GALLERY_URL;

  // useEffect(() => {
  //   const fetchGalleryData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(SHEET_BEST_GALLERY_API_URL);
  //       setGalleryItems(response.data.reverse()); 
  //     } catch (err) {
  //       setError(new Error("Terjadi kesalahan saat memuat galeri. Silakan coba lagi nanti."));
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchGalleryData();
  // }, []);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='pt-20'>
        <section className='flex flex-col items-center justify-center gap-5 px-4'>
          <h1 className='text-center text-[#1A472A] md:text-5xl text-3xl font-bold mt-10'>Galeri Kenangan</h1>
          <p className='text-center md:text-xl mt-5'>Momen-momen tak terlupakan yang terekam dalam setiap perjalanan dan kebersamaan kami.</p>
        </section>

        <section className='flex flex-wrap items-center justify-center gap-5 py-20'>
          {/* {loading && <p className="text-gray-700 text-center w-full">Memuat galeri...</p>}

          {error && <p className="text-red-500 text-center w-full">{error.message}</p>}

          {!loading && !error && (
            galleryItems.length > 0 ? (
              galleryItems.map((item, index) => (
                <CardGallery
                  key={index}
                  image={item.foto}
                  title={item.judul}
                  description={item.deskripsi}
                />
              ))
            ) : (
              <p className="text-gray-600 text-center w-full">Tidak ada gambar di galeri.</p>
            )
          )} */}
          <CardGallery />
          <CardGallery />
          <CardGallery />
          <CardGallery />
          <CardGallery />
          <CardGallery />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Gallery;