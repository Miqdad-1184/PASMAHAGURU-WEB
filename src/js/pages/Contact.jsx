import React from 'react'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import CardContact from '../components/cards/CardContact.jsx'
import GetInTouch from '../components/cards/GetInTouch.jsx'
import Maps from '../components/cards/Maps.jsx'

const Contact = () => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <main className='bg-[#F8F9FA] flex flex-col items-center justify-center gap-5 py-38 px-4'>
          <section className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-center text-[#1A472A] md:text-5xl text-3xl font-bold mt-10'>Hubungi Kami</h1>
            <p className='text-center md:text-xl mt-5 w-3/4'>Punya pertanyaan atau ingin bergabung? Jangan ragu untuk menghubungi kami melalui salah satu cara di bawah ini.</p>
          </section>
          <section className='flex flex-col md:flex-row justify-center gap-10 py-10 bg-white rounded-lg shadow-lg md:p-10 mt-10'>
            <div>
              <CardContact />
            </div>
            <div>
              <GetInTouch />
            </div>
          </section>
          <section className='flex items-center justify-center pt-10'>
            <Maps />
          </section>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Contact