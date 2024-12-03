import React from 'react'
import ProductFilter from '../productFilter/ProductFilter'
import ProductLayout from './ProductLayout'
import {cars} from '../../data/constant'

const Products = () => {
  return (
    <div className='text-zinc-900 mb-10'>
        <ProductFilter/>
        <div className='flex flex-wrap gap-4 justify-center items-center'>
            {cars.map((car, index) => (
                <ProductLayout key={index} />  
            ))}
        </div>
        
    </div>
  )
}

export default Products