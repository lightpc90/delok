import Image from 'next/image'
import React from 'react'
import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className='fixed bg-primary top-0 left-0 flex items-center justify-between gap-4 h-20 w-full px-4 z-[100]'>
        <span className='h-[50px] w-[50px] rounded-full bg-accent flex items-center justify-center overflow-hidden'>
          <Image src={`/icons/icon.jpeg`} alt='logo' width={500} height={500} className='w-full h-full object-cover object-center '/>
        </span>
        <span>Delok Autos</span>
      <span><RiMenuFill size={30} /></span>
    </nav>
  )
}

export default Navbar