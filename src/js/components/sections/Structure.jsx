import React from 'react'
import CardStructure from '../cards/CardStructure.jsx'

const Structure = () => {
    const leader = [
        { status: 'Ketua Umum', name: 'M.Thoriq Thoharoh' },
        { status: 'Komandan Lapangn', name: 'Fathan Adi L' },
    ];
    const BPH = [
        { status: 'Sekretaris 1', name: 'Sulis Destriani' },
        { status: 'Sekretaris 2', name: 'Tala Nurotul N' },
        { status: 'Bendahara 1', name: 'Rere Aulia M' },
        { status: 'Bendahara 2', name: 'Latifa Azhar' },
    ];
    const PSDO = [
        { status: 'Koor PSDO', name: 'Rani Purwanengsih' },
        { status: 'Staff PSDO', name: 'Miqdad Fauzan G' },
        { status: 'Staff PSDO', name: 'M.Febri NR' },
        { status: 'Staff PSDO', name: 'Astuti S' },
    ];
    const Inventaris = [
        { status: 'Koor Inventaris', name: 'Dewi Komalasari' },
        { status: 'Staff Inventaris', name: 'Cahya Zaelanin' },
        { status: 'Staff Inventaris', name: 'Tazkia Nafisa I' },

    ];
  return (
    <div className='bg-[#F8F9FA] py-10 md:px-20 px-4'>
        <h1 className='md:text-3xl text-2xl font-bold text-[#1A472A] text-center'>Struktur Organisasi</h1>
        <div className='flex flex-col items-center justify-center gap-5 py-20'>
            <h2 className='md:text-2xl text-xl text-center font-bold text-[#1A472A]'>Badan Pengurus Harian (BPH)</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {leader.map((item, index) => (
                    <CardStructure key={index} name={item.name} status={item.status} />
                ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {BPH.map((item, index) => (
                    <CardStructure key={index} name={item.name} status={item.status} />
                ))}
            </div>

            <h2 className='md:text-2xl textxl text-center font-bold text-[#1A472A]'>Pengembangan Sumber Daya Organisasi (PSDO)</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {PSDO.map((item, index) => (
                    <CardStructure key={index} name={item.name} status={item.status} />
                ))}
            </div>

            <h2 className='md:text-2xl text-xl font-bold text-[#1A472A]'>Inventaris</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {Inventaris.map((item, index) => (
                    <CardStructure key={index} name={item.name} status={item.status} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Structure