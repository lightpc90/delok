import Link from 'next/link'
import React from 'react'
import PositionedImage from './PositionedImage';
import { Bebas_Neue } from "next/font/google";


const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Bebas Neue only supports 400 weight
  display: "swap",
});

const ServiceCards = () => {
  return (
    <>
      <div className={`w-[90%] h-[260px] my-[30px] flex flex-col gap-4 p-4 bg-secondary rounded-lg shadow-md relative overflow-x-clip`}>
        {/* posistioned image */}
        <PositionedImage />
          <h1 className={`${bebas.className} text-3xl`}>Sell Your Car Fast</h1>
          <p className='w-10/12'>Turn your car into cash effortlessly-- fast, secure, and hassle-free!</p>
          <Link className='font-bold inline-block w-fit border-2 border-white hover:bg-primaryHover p-2 rounded-md' href={'/'}>
            Sell Now...</Link>
      </div>
      <div className={`w-[90%] h-[260px] my-[30px] flex flex-col gap-4 p-4 bg-primary rounded-lg shadow-md`}>
        <h1 className={`${bebas.className} text-3xl`}>Rent a Car Easily</h1>
        <p className='w-10/12'>Get on the road with ease-- flexible rentals, affordable rates, and zero hassles</p>
        <Link className='font-bold inline-block w-fit border-2 border-white hover:bg-primaryHover p-2 rounded-md' href={'/'}>
          Rent Now...</Link>
      </div>
    </>
  )
}

export default ServiceCards