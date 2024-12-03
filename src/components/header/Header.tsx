import Link from 'next/link'
import React from 'react'
import { Bebas_Neue } from "next/font/google";


const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Bebas Neue only supports 400 weight
  display: "swap",
});

const Header = () => {
  return (
    <div className='font-[family-name:var(--font-geist-sans)] flex items-end bg-primary w-full h-[500px] pt-20 px-4'>
      <div className='pb-4 flex flex-col gap-4'>

        <div className={`${bebas.className} text-5xl`}>Delok Autos</div>
        <p className='w-10/12'>The company intro and preposition comes here</p>
        <Link className='font-bold inline-block w-fit hover:bg-primaryHover bg-accent p-2 rounded-md' href={'/contact'}>
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default Header