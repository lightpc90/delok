"use client"

import Image from 'next/image'
import Link from 'next/link';
import {useState} from 'react'
import { RiMenuFill } from "react-icons/ri";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='fixed bg-primary text-white top-0 left-0 flex items-center justify-between gap-4 h-20 w-full px-4 lg:px-[100px] z-[100]'>
        <span className='h-[50px] w-[50px] rounded-full bg-accent flex items-center justify-center overflow-hidden'>
          <Image src={`/icons/icon.jpeg`} alt='logo' width={500} height={500} className='w-full h-full object-cover object-center '/>
        </span>
        <Link className='font-mono text-2xl' href={`/`}>Delok Autos</Link>
      <span onClick={() => setIsOpen(!isOpen)}>{ isOpen ? <RiMenu4Fill size={30} /> : <RiMenuFill size={30} />}</span>
    </nav>
  )
}

export default Navbar