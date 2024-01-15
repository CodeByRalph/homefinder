import Image from 'next/image'

//Image imports
import MobileImage from "@/public/SmallHero.png";
import LargeHero from "@/public/LargeHero.png";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <h1 className='text-white p-3 text-lg'>DreamHome</h1>
      </div>
      <div className='text-center'>
        <span className='text-lg'>Find your </span><span className='text-xl font-bold'>Dream Home</span>
        <h1>We can help you find it!</h1>
      </div>
      <div className='bg-white opacity-50'>
         <span>Buy</span><span>Rent</span>
      </div>
      <Image 
        src={MobileImage}
        alt="Small Hero Image"
        fill="true"
        className='z-[-1]'
      />
    </main>
  )
}
