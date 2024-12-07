'use client'

import Link from 'next/link'
import React from 'react'
import { Bebas_Neue } from "next/font/google";
import Image from 'next/image'  
import { motion } from "motion/react"


const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Bebas Neue only supports 400 weight
  display: "swap",
});

const Header = () => {
  return (
    <div className='font-[family-name:var(--font-geist-sans)] flex items-end justify-center w-full min-h-[1000px] md:min-h-[100vh] mb-20 pt-20 px-4'>
      <div className='pb-4 flex flex-col items-center  gap-4'>
        <motion.div
          className="absolute top-0 right-[-50%] z-0"
          initial={{ x: "100vw" }}
          animate={{ x: "0" }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 15,
            duration: 2,
          }}
        >
          <Image
            src="/images/trans_honda.png" // Replace with your car image path
            alt="Car driving"
            width={500}
            height={200}
            className="object-contain"
          />
        </motion.div>
        <div className={`${bebas.className} text-7xl md:text-9xl text-primary`}>Delok Autos</div>
        <h2 className='w-10/12 text-center text-primary text-xl md:text-3xl font-bold font-mono'>--Drive the Future with Confidence</h2>
        <p className='w-10/12 max-w-[800px] text-black text-lg font-semibold font-mono'>At Delok Autos Nig Ltd., we make buying, selling, leasing, and renting cars seamless, 
        reliable, and rewarding. Whether you&apos;re upgrading your ride, earning from your car, or searching for the perfect vehicle, 
        we&apos;re here to deliver exceptional value and trust every step of the way.</p>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          <Link className='transition-all duration-300 ease-in-out translate-x-0 hover:translate-y-1 font-bold inline-block w-fit hover:bg-white hover:text-primary border-2 border-primary bg-primary p-2 rounded-md' href={'/contact'}>
          Explore Our Cars
        </Link>
        <Link className='transition-all duration-300 ease-in-out translate-x-0 hover:translate-y-1 font-bold inline-block w-fit hover:bg-white hover:text-secondary border-2 border-secondary bg-secondary p-2 rounded-md' href={'/contact'}>
          Sell Your Car
        </Link>
          <Link className='transition-all duration-300 ease-in-out translate-x-0 hover:translate-y-1 font-bold inline-block w-fit hover:bg-primaryHover hover:text-white border-2 border-primary text-primary p-2 rounded-md' href={'/contact'}>
          Lease or Rent a Car
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Header