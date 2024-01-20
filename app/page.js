'use client'

import Image from 'next/image'

//Component Imports
import SearchForm from '@/components/SearchForm'
import Carousel from '@/components/Carousel';

//Image imports
import MobileImage from "@/public/SmallHero.png";
import MenuBars from "@/public/MenuBars.svg"

export default function Home() {
  const houseData = [
    {id: 1, image: '/SmallHero.png', title: 'Beautiful house 1'},
    {id: 2, image: '/SmallHero.png', title: 'Beautiful house 2'},
    {id: 3, image: '/SmallHero.png', title: 'Beautiful house 3'},
    {id: 4, image: '/SmallHero.png', title: 'Beautiful house 4'},
    {id: 5, image: '/SmallHero.png', title: 'Beautiful house 5'},
    {id: 6, image: '/SmallHero.png', title: 'Beautiful house 6'},
  ]
  return (
    <main className="min-h-screen">
      <div>
        <div className='flex justify-between'>
          <h1 className='text-white p-3 text-lg'>DreamHome</h1>
          <Image src={MenuBars} alt="Burger Menu Icon" height={25} width={25} className='mr-3 text-white'/>
        </div>
        <SearchForm />
        <Image src={MobileImage} alt="Small Hero Image" fill="true" className='z-[-1]'/>
      </div>
      <Carousel houses={houseData}/>
    </main>
  )
}
