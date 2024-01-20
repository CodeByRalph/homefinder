import { useState } from 'react';
import CarouselCard from "./CarouselCard";
import Image from 'next/image'

export default function Carousel({houses}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 2 < houses.length ? prevIndex + 2 : 0));
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 2 >= 0 ? prevIndex - 2 : houses.length - 2));
  }

  return (
    <div className="rounded-md bg-white p-3 my-10 w-11/12 m-auto flex items-center justify-between">
        <button className='text-black' onClick={handlePrev}>&lt;</button>
        <div className="m-auto flex space-x-4 gap-4">
           {houses.slice(currentIndex, currentIndex + 2).map((house) => (
             <div key={house.id} className='flex flex-col items-center text-black'>
                <Image src={house.image} alt="House pic" height={100} width={125} className='rounded-t-lg'/>
                {house.title}
             </div>
           ))}

        </div>
        <button className='text-black' onClick={handleNext}>&gt;</button>
    </div>
  )
}
