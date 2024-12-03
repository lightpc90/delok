import Image from 'next/image';
import React from 'react'
import { TbShare2 } from "react-icons/tb";

const ProductLayout = () => {
  return (
    <div className='w-5/12 h-[210px] bg-secondary rounded-lg relative shadow-lg border-none outline-none overflow-hidden'>
      {/* product image container */}
      <div className='h-[60%] w-full absolute top-0 left-0 bg-neutral'>
        <Image src={`/images/honda.png`} alt='honda' width={100} height={100} className='w-full h-full object-cover object-center rounded-lg '/>
      </div>
      {/* product info container */}
      <div className='absolute top-1/2 left-0 flex flex-col gap-2 rounded-lg  bg-gray-200 shadow-lg w-full h-[50%] p-1'>
      <div className='flex justify-between text-sm items-center'>
        <span className='font-bold'>Honda CRV</span>
        <span className='text-primary'>N13M</span>
      </div>
      <div className='flex justify-between text-sm items-center'>
        <span className='font-bold'>2015</span>
        <button className='bg-neutral text-sm rounded-md p-1'>Foreign Used</button>
      </div>
      <div className='flex justify-between text-sm items-center '>
          <button className='bg-primary text-sm rounded-md p-1 text-white'>Buy</button>
          <button className=' text-sm rounded-md text-secondary'><TbShare2 size={24}/></button>
      </div>
      </div>
      
    </div>
  )
}

export default ProductLayout