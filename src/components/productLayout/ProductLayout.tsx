import React from 'react'

const ProductLayout = () => {
  return (
    <div className='w-5/12 h-[210px] bg-secondary rounded-lg relative shadow-lg'>
      <div className='absolute top-1/2 left-0 flex flex-col gap-1  bg-white rounded-lg w-full h-[50%] p-1'>
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
        <button className=' text-sm rounded-md'>Share</button>
      </div>
      </div>
      
    </div>
  )
}

export default ProductLayout