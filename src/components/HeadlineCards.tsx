import React from 'react'

export default function () {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
       
        {/* {Card No.1} */}
        <div className='rounded-xl relative'>
           
            {/* {Overlay} */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>You're hunger?</p>
                <p className='px-2'>Want some pizza? Maybe burgers?</p>
                <button className='border-white bg-white text-black mx-4 absolute bottom-4 hover:bg-orange-500 hover:scale-105 duration-300'>Order now!</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl' 
            src="https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg"
            alt='/'  />
        </div>

        {/* {Card No.2} */}
        <div className='rounded-xl relative'>
            
            {/* {Overlay} */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We have the richest menu.</p>
                <p className='px-2'>Why are you not ordering?</p>
                <button className='border-white bg-white text-black mx-4 absolute bottom-4 hover:bg-orange-500 hover:scale-105 duration-300'>I don't have a money</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl' 
            src="https://hips.hearstapps.com/hmg-prod/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1xw:0.843328335832084xh;center,top&resize=1200:*"
            alt='/'  />
        </div>

        {/* {Card No.3} */}
        <div className='rounded-xl relative'>
            {/* {Overlay} */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>In an italian recipe the paragraph -</p>
                <p className='px-2'>Buy something in our <span className='font-bold'>Best pizza</span></p>
                <button className='border-white bg-white text-black mx-4 absolute bottom-4 hover:bg-orange-500 hover:scale-105 duration-300'>Order</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl' 
            src="https://www.foodandwine.com/thmb/CGXpgjWOgHWv9TsqyMoLyl5cYrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soppressata-pizza-with-calabrian-chile-hot-honey-FT-RECIPE0422-827abb3537834dbcb6ab0bbd6efece39.jpg"
            alt='/'  />
        </div>

    </div>
  )
}
