import React from 'react'
import ProductFilter from '../productFilter/ProductFilter'
import ProductLayout from './ProductLayout'

const Products = () => {
  return (
    <div className='text-zinc-900'>
        <ProductFilter/>
        <ProductLayout/>
    </div>
  )
}

export default Products