import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const GetInTouch = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    setStatus('Mengirim...');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('Pesan berhasil terkirim!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('Gagal mengirim pesan. Silakan coba lagi.');
      });
  };

  return (
    <div className="container mx-auto px-4 md:w-150 w-80">
      <h2 className="text-3xl font-bold text-[#1A472A] mb-5">Kirim Pesan</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="full_name" className="block text-lg font-medium text-gray-700 mb-2">Nama Lengkap</label>
          <input
            type="text"
            id="full_name"
            name="name"
            required
            className="mt-1 block w-full px-4 py-3 border border-[#1A472A] rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-lg"
          />
        </div>

        <div>
          <label htmlFor="email_address" className="block text-lg font-medium text-gray-700 mb-2">Alamat Email</label>
          <input
            type="email"
            id="email_address"
            name="email"
            required
            className="mt-1 block w-full px-4 py-3 border border-[#1A472A] rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-lg"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">Subjek</label>
          <input
            type="text"
            id="subject"
            name="title"
            required
            className="mt-1 block w-full px-4 py-3 border border-[#1A472A] rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-lg"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Pesan Anda</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="mt-1 block w-full px-4 py-3 border border-[#1A472A] rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-lg resize-y"
          ></textarea>
        </div>

        <button
          type="submit"
          className="pointer inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#1A472A] hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Kirim Pesan
        </button>

        {status && (
          <p className={`mt-4 text-lg font-semibold ${status.includes('berhasil') ? 'text-[#1A472A]' : 'text-red-600'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default GetInTouch;