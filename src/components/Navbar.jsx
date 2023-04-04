import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiFillTag, AiOutlineClose, AiFillYoutube, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'



export default function Navbar() {

    const [nav, setNav] = useState(false)
    const OpenAndClose = () => setNav(!nav)

 
  return (
  <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 px-5'>
    <div className='flex items-center'>
        <div onClick={ OpenAndClose } className='cursor-pointer'>
            <AiOutlineMenu size={30} />
        </div>
    </div>

    <h1 className='text-2xl sm:text-3xl lg:text-3xl px-2'>
        Best <span className='font-bold'>Pizza</span>
    </h1>

    <div className='hidden lg:flex items-center text-[1px] '>
        <p className='bg-[#c4302b] p-1 px-2 py-2 text-white rounded-full cursor-pointer m-1 '><AiFillYoutube size={20}/></p>
        <p className='bg-[#6e5494] p-1 px-2 py-2 text-white rounded-full  cursor-pointer m-1'><AiFillGithub size={20} /> </p>
        <p className='bg-[#1DA1F2] p-1 px-2 py-2 text-white rounded-full  cursor-pointer m-1'><AiOutlineTwitter size={20} /> </p>
    </div>

    {/* {Поиск} */}
    <div 
        className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
      <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Искать пожрать...' />
    </div>

        {/* {Корзина} */}
        <button 
            className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2'/>Корзина
        </button>
    

    
    {/* {Мобильное меню}
    {Наложение} */}
    {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

    {/* { {Левая колонка Side drawer menu} */}
     <div>
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 
        'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={ OpenAndClose } size={30} 
                className='absolute right-4 top-4 cursor-pointer' />
        <h2 className='text-2xl p-4'>
            Best <span className='font-bold'>Pizza</span>
        </h2>
        <nav>
        <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex cursor-pointer'><TbTruckDelivery size={25} className='mr-2'  />Заказы</li>
            <li className='text-xl py-4 flex cursor-pointer'><BsFillSaveFill  size={25} className='mr-2' />Лучшее</li>
            <li className='text-xl py-4 flex cursor-pointer'><AiFillTag size={25} className='mr-2'/>Акции</li>
            <li className='text-xl py-4 flex cursor-pointer'><FaWallet size={25} className='mr-2' />Кошелек</li>
            <li className='text-xl py-4 flex cursor-pointer'><MdFavorite size={25} className='mr-2' />Избранное</li>
            <li className='text-xl py-4 flex cursor-pointer'><FaUserFriends size={25} className='mr-2' />Пригласить друзей</li>
            <li className='text-xl py-4 flex cursor-pointer'><MdHelp size={25} className='mr-2' />Помощь</li>
        </ul>
        </nav>
        </div>       
        </div>
    </div>

  )
}


