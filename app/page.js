import Image from 'next/image'

//Component Imports
import SearchForm from '@/components/SearchForm'

//Image imports
import MobileImage from "@/public/SmallHero.png";
import LargeHero from "@/public/LargeHero.png";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <h1 className='text-white p-3 text-lg'>DreamHome</h1>
      </div>
      <SearchForm />
      <Image src={MobileImage} alt="Small Hero Image" fill="true" className='z-[-1]'/>
    </main>
  )
}
