import React from 'react'
import Header from '../components/layout/Header.jsx'
import HeroHome from '../components/sections/HeroHome.jsx'
import About from '../components/sections/About.jsx'
import Structure from '../components/sections/Structure.jsx'
import Footer from '../components/layout/Footer.jsx'

const Home = () => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <main className='pt-15'>
          <section>
            <HeroHome />
          </section>
          <section>
            <About />
          </section>
          <section>
            <Structure />
          </section>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Home