import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiFillTag, AiOutlineClose, AiFillYoutube, AiFillGithub } from 'react-icons/ai'
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

    <div className='hidden lg:flex items-center '>
        <p className='bg-[#b91c1c] p-1 px-2 py-2 text-white rounded-full cursor-pointer m-1 hover:bg-[#B00000]'><a href='https://www.youtube.com/watch?v=u3TjWRmVMQE'> <AiFillYoutube size={20} /> </a></p>
        <p className='bg-[#6e5494] p-1 px-2 py-2 text-white rounded-full cursor-pointer m-1 hover:bg-violet-800'><a href='https://github.com/ramordeeple'><AiFillGithub size={20} /> </a></p>
    </div>

    {/* {Search} */}
    <div 
        className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
      <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search...' />
    </div>

        {/* {Cart} */}
        <button 
            className='bg-black text-white hidden md:flex items-center py-2 rounded-full px-10 hover:bg-orange-500'>
            <BsFillCartFill size={20} className='mr-2'/>Cart
        </button>
    

    
    {/* {Мобильное меню}
    {Наложение} */}
    {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

    {/* { {Left side drawer menu} */}
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
            <li className='text-xl py-4 flex cursor-pointer hover:text-sky-400'><TbTruckDelivery size={25} className='mr-2'  />Orders</li>
            <li className='text-xl py-4 flex cursor-pointer hover:text-sky-400'><BsFillSaveFill  size={25} className='mr-2' />Best</li>
            <li className='text-xl py-4 flex cursor-pointer hover:text-sky-400'><AiFillTag size={25} className='mr-2'/>Discounts</li>
            <li className='text-xl py-4 flex cursor-pointer hover:text-sky-400'><FaWallet size={25} className='mr-2' />Wallet</li>
            <li className='text-xl py-4 flex cursor-pointer hover:text-sky-400'><MdFavorite size={25} className='mr-2' />Favorite</li>
            <li className='text-xl py-4 flex cursor-pointer hover:text-sky-400'><FaUserFriends size={25} className='mr-2' />Invite</li>
            <li className='text-xl py-4 flex cursor-pointer hover:text-sky-400'><MdHelp size={25} className='mr-2' />Help</li>
        </ul>
        </nav>
        </div>       
        </div>
    </div>

  )
}


