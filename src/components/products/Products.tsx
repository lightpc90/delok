import React from 'react'
import ProductFilter from './productFilter/ProductFilter'
import ProductLayout from './productLayout/ProductLayout'
import { cars } from '../../data/constant'

const Products = () => {
  return (
    <div className='text-zinc-900 mb-10 w-full flex flex-col gap-4 items-center'>
      <ProductFilter />
      <div className='flex flex-wrap w-full max-w-[1200px] gap-4 justify-center items-center'>
        {cars.map((car, index) => (
          <ProductLayout key={index} />
        ))}
      </div>

    </div>
  )
}

export default Products