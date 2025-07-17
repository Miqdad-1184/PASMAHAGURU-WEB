import React from 'react'
import CardAbout from '../cards/CardAbout.jsx'
import CardHistory from '../cards/CardHistory.jsx'
import Logo from '../../../assets/logo.png'

const About = () => {

    const aboutData = [
        {
        title: "Visi",
        text: "Menjadikan organisasi pecinta alam yang berakhlak mulia, unggul,berkualitas, berpola pikir luas, bertanggungjawab, serta menjunjung tinggi nilai nilai moral demi persatuan dan kesatuan untuk membangun karakteristik organisasi yang mandiri dan berkualitas. "
        },
        {
        title: "Misi",
        text: "1. Berpegang teguh kepada Tuhan Yang Maha Esa. 2. Menjalankan organisasi dengan prinsip tata kelola yang baik dan mengikat 3. Meningkatkan kemampuan teknis, fisik, organisasi, moral yang baik dan seimbang demi mewujudkan pribadi yang kreatif, inovatif, berjiwa sosial dan kepemimpinan dalam bidang kepecintaalaman 4. Menjalin kerjasama dan mempererat rasa kekeluargaan yang harmonis antar sesama pecinta alam. "
        }
    ];

  return (
    <div id='about' className='flex flex-col items-center justify-center gap-5 md:px-20 px-4 py-20'>
        <h1 className='md:text-3xl text-2xl font-bold text-[#1A472A] text-center'>Tentang P.A.S Mahaguru</h1>
        <div>
            <div className='flex md:flex-row flex-col items-center justify-center gap-10'>
                <img src={Logo} alt="logo pasmahaguru" className='md:w-1/4' />
                <CardHistory/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                {aboutData.map((item, index) => (
                    <CardAbout key={index} title={item.title} text={item.text} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default About