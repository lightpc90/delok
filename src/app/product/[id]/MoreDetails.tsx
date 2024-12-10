'use client'

import { Car } from '@/types/types'
import {useState} from 'react'

const MoreDetails = ({ product }: { product: Car | undefined }) => {
    const [show, setShow] = useState<boolean>(false)
  return (
      <div>
          <button onClick={()=>{ setShow(!show) }} className='text-primary text-center w-full'>{show ? 'Fewer Details' : 'More Details'}</button>
          {show && <div>
              <h1 className=' border-b-2 border-gray-200 my-2'>
                  <span>Fuel: </span>
                  <span className='font-semibold'>
                      {product?.fuel}
                  </span>
              </h1>
              <h1 className='border-b-2 border-gray-200 my-2'>
                  <span>Body: </span>
                  <span className='font-semibold'>
                      {product?.body}
                  </span>
              </h1>
              <h1 className='border-b-2 border-gray-200 my-2'>
                  <span>Color: </span>
                  <span className='font-semibold'>
                      {product?.color}
                  </span>
              </h1>
              <h1 className='border-b-2 border-gray-200 my-2'>
                  <span>Engine: </span>
                  <span className='font-semibold'>
                      {product?.engine}
                  </span>
              </h1> 
              <h1 className='border-b-2 border-gray-200 my-2'>
                  <span>Doors: </span>
                  <span className='font-semibold'>
                      {product?.doors}
                  </span>
              </h1> 
              <h1 className='border-b-2 border-gray-200 my-2'>
                  <span>Seats: </span>
                  <span className='font-semibold'>
                      {product?.seats}
                  </span>
              </h1> 
              <h1 className='border-b-2 border-gray-200 my-2'>
                  <span>Interior: </span>
                  <span className='font-semibold'>
                      {product?.interior}
                  </span>
              </h1> 
              <h1 className='border-b-2 border-gray-200 my-2'>
                  <span>Exterior: </span>
                  <span className='font-semibold'>
                      {product?.exterior}
                  </span>
              </h1> 
              <h1 className='border-b-2 border-gray-200 my-2'>
                  <span>Interior Color: </span>
                  <span className='font-semibold'>
                      {product?.interiorColor}
                  </span>
              </h1> 
          </div>}
    </div>
  )
}

export default MoreDetails