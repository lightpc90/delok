import React from 'react'
import { Bebas_Neue } from "next/font/google";


const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Bebas Neue only supports 400 weight
  display: "swap",
});

const ProductFilter = () => {
  return (
    <div className='space-y-4 w-full p-4 flex flex-col overflow-hidden'>
      <h1 className={`${bebas.className} text-3xl`}>Buy a car</h1>
      <div className='flex flex-flex-wrap items-center gap-4 w-full justify-center'>
        <button className='bg-primary text-white p-2 rounded-md shadow-md'>All</button>
        <button className='bg-neutral p-2 rounded-md shadow-md'>Foreign Used</button>
        <button className='bg-neutral p-2 rounded-md shadow-md'>Nigerian Used</button>
      </div>
      <div className='w-full'>
        <h3 className='mb-2 font-bold'>Shop by Budget</h3>
        <div className='flex w-[300px] gap-3 items-center p-2 overflow-x-auto text-sm'>
          <button className='bg-primary text-white h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span className='text-neutral'>Under</span><span className='font-bold'>N3M</span></button>
          <button className='border-2 border-neutral h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span>From</span><span className='font-bold'>N3M-5M</span></button>
          <button className='border-2 border-neutral h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span>From</span><span className='font-bold'>N5M-7M</span></button>
          <button className='border-2 border-neutral h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span>From</span><span className='font-bold'>7M-N10M</span></button>
          <button className='border-2 border-neutral h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span>From</span><span className='font-bold'>N10M-N15M</span></button>
          <button className='border-2 border-neutral h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span>Above</span><span className='font-bold'>N15M</span></button>

        </div>
      </div>
      <div>
        <h3 className='mb-2 font-bold'>Shop by Make</h3>
        <div className='flex flex-wrap w-full gap-3 items-center '>
          <button className='h-14 w-14 bg-primary text-white items-center justify-center rounded-full p-2 flex'>
            logo
          </button>
          <button className='h-14 w-14 bg-primary text-white items-center justify-center rounded-full p-2 flex'>
            logo
          </button>
          <button className='h-14 w-14 bg-primary text-white items-center justify-center rounded-full p-2 flex'>
            logo
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter