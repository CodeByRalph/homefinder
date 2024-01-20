import Image from 'next/image';

export default function SearchForm() {
  return (
    <div className='mt-24'>
      <div className='text-center mb-10'>
        <span className='text-2xl'>Find your </span><span className='text-3xl font-bold'>Dream Home</span>
        <h1 className='text-xl'>We can help you find it!</h1>
      </div>
      <div className='h-auto p-4 backdrop-blur-xs bg-white/30 w-3/4 m-auto border-[1px] border-white rounded-lg'>
         <div className='flex justify-center mb-3'>
          <span className='font-bold mr-2 '>Buy</span><span className='font-bold ml-2'>Rent</span>
         </div>
         <form className='w-4/5 m-auto flex flex-col items-center gap-2'>
          <input placeholder='Location' className='text-black w-full pl-3 rounded-lg p-2 drop-shadow-2xl'/>
          <input placeholder='Bedrooms' className='text-black w-full pl-3 rounded-lg p-2 drop-shadow-2xl'/>
          <button type='submit' className='bg-orange-400 p-2 rounded-md w-2/4 mt-3'>Search</button>
         </form>
      </div>
    </div>
  )
}
