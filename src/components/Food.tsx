import React, { useState } from 'react'
import {data} from '../data/data'



export default function Food() {

    const [foods, setFoods] = useState(data)


    // Clear filter 
    const setData = () => setFoods(data)


    //Filter foods
    const filterType = (category: string) => {
        setFoods(data.filter ((item) => {
            return item.category === category
        }) )
    }

    
    //Filter price 
    const filterPrice = (price: string) => {
        setFoods(data.filter ((item) => {
            return item.price === price
        }) ) 
    }

      
    //Filter of exact food 
    const filterBurger = () => filterType('burger')
    const filterPizza = () => filterType('pizza')
    const filterSalad = () => filterType('salad')
    const filterChicken = () => filterType('chicken')

    //Filter of exact price 
    const filterPriceOneDollar = () => filterPrice('$')
    const filterPriceTwoDollars = () => filterPrice('$$')
    const filterPriceThreeDollars = () => filterPrice('$$$')
    const filterPriceFourDollars = () => filterPrice('$$$$')


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Best menu of this week</h1>

        {/* {Filter Row} */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* {Filter Type} */}
            <div>
                <p className='font-bold text-gray-700'>Food Filter</p>
                <div className='flex justify-between flex-wrap'>
                <button onClick={setData}className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                <button onClick={filterBurger} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                <button onClick={filterPizza} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                <button onClick={filterSalad} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
                <button onClick={filterChicken} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>

                </div>
            </div>

            {/* {Filter Price} */}
            <div>
                <p className='font-bold text-gray-700'>Price filter</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={filterPriceOneDollar} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={filterPriceTwoDollars} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={filterPriceThreeDollars} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={filterPriceFourDollars} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>

        {/* {Display foods} */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index) => (

                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
                    </div>
                </div>
            )   )}
        </div>
    </div>
  )
}
