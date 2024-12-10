'use client'

import Image from 'next/image';
import React from 'react'
import { TbShare2 } from "react-icons/tb";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { Car } from '@/types/types';
import Link from 'next/link';

const ProductLayout = ({car}: {car: Car}) => {
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }
  return (
    <div  className='w-5/12 md:w-3/12 h-[210px] md:h-[330px] bg-secondary rounded-lg relative shadow-lg border-none outline-none overflow-hidden'>
      {/* product image container */}
      <Link href={`/product/${car.id}`} className='h-[60%] w-full absolute top-0 left-0 bg-neutral'>
        <Image src={`/images/honda.png`} alt='honda' width={100} height={100} className='w-full h-full object-cover object-center rounded-lg ' />
      </Link>
      {/* product info container */}
      <div className='absolute top-1/2 left-0 flex flex-col gap-2 rounded-lg text-sm md:text-lg  bg-gray-200 shadow-lg w-full h-[50%] p-1 md:p-3'>
        <div className='flex justify-between items-center'>
          <span className='font-bold'>{ car.name}</span>
          <span className='text-primary'>N13M</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='font-bold'>2015</span>
          <button className='bg-neutral rounded-md p-1'>Foreign Used</button>
        </div>
        <div className='flex justify-between items-center '>
          {/* buy button */}
          <Link href={`/product/${car.id}`} className='bg-primary rounded-md p-1 md:p-2 text-white hover:bg-primaryHover'>Buy</Link>
          {/* bookmark button */}
          <div className='cursor-pointer'>
            {isBookmarked ? (
              <button onClick={handleBookmark} className=' rounded-md text-primary'><FaBookmark size={24} /></button>
            ) : (
              <button onClick={handleBookmark} className=' rounded-md text-primary'><FaRegBookmark size={24} /></button>
            )}
          </div>
          {/* share button */}
          <button className=' rounded-md text-secondary'><TbShare2 size={24} /></button>
        </div>
      </div>

    </div>
  )
}

export default ProductLayout