import React from 'react'

export default function hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* {Overlay} */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md-text-6xl lg:7xl lg:text-7xl font-bold'>The <span className='text-orange-500'>best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md-text-6xl lg:7xl lg:text-7xl font-bold'> <span className='text-orange-500'>Pizza </span>delivered!</h1>
            </div>
            <img 
              className='w-full max-h-[500px] object-cover'
              src="https://masyamba.ru/%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/48-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg" alt="/" />
        </div>
    </div>
  )
}
