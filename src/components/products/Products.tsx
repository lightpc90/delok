'use client'

import {useState} from 'react'
import ProductFilter from './productFilter/ProductFilter'
import ProductLayout from './productLayout/ProductLayout'
import { cars } from '../../data/constant'

const Products = () => {
  const [products, setProducts] = useState(cars)
  
  return (
    <div className='text-zinc-900 mb-10 w-full flex flex-col gap-4 items-center'>
      <ProductFilter products={products} setProducts={setProducts} />
      <div className='flex flex-wrap w-full max-w-[1200px] gap-4 justify-center items-center'>
        {products.map((car, index) => (
          <ProductLayout car={car} key={index} />
        ))}
      </div>

    </div>
  )
}

export default Products