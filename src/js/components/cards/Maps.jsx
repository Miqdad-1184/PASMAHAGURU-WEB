import React from 'react';

const Maps = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6 md:text-3xl">Peta Lokasi Kami</h2>
      
      <div className="
        relative overflow-hidden 
        w-80 h-100 pb-[56.25%] 
        md:w-[1000px] md:h-[450px]
        mx-auto
      ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8660267184628!2d107.44212597378478!3d-6.538597963918226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690e68a1406c01%3A0xa66f34eb29c41198!2sUniversitas%20Pendidikan%20Indonesia%2C%20Kampus%20Purwakarta!5e0!3m2!1sid!2sid!4v1753134837767!5m2!1sid!2sid" // URL Google Maps untuk Tasikmalaya
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Tasikmalaya di Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;