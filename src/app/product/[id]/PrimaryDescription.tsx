import { Car } from '@/types/types'
import React from 'react'

const PrimaryDescription = ({product}: {product: Car | undefined}) => {
  return (
      <div className=''>

          <h1 className='bg-gray-200 rounded-md p-1 text-sm inline-block'>{product?.usedType}</h1>
          <h1 className=' border-b-2 border-gray-200 my-2'>
              <span>Vehicle Name: </span>
              <span className='font-semibold'>
                  {product?.name}
              </span>
          </h1>
          <h1 className='border-b-2 border-gray-200 my-2'>
              <span>Year: </span>
              <span className='font-semibold'>
                  {product?.year}
              </span>
          </h1>
          <h1 className='border-b-2 border-gray-200 my-2'>
              <span>Price: </span>
              <span className='font-semibold'>
                  {product?.price}
              </span>
          </h1>
          <h1 className='border-b-2 border-gray-200 my-2'>
              <span>Transmission: </span>
              <span className='font-semibold'>
                  {product?.transmission}
              </span>
          </h1>
          <h1 className='border-b-2 border-gray-200 my-2'>
              <span>Mileage: </span>
              <span className='font-semibold'>
                  {product?.mileage}
              </span>
          </h1>
         
      </div>
  )
}

export default PrimaryDescription