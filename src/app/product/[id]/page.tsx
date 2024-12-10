import React from 'react'
import { cars } from '../../../data/constant'
import { Car } from "@/types/types"
import Image from 'next/image'

const Page = async ({ params }: { params: { id: number } }) => {
  console.log("products: ", cars)
  const getParams = await params
  console.log("params: ", getParams)
  const product = cars.find((car: Car) => car.id == getParams.id)
  console.log("product: ", product)
  console.log()
  return (
    <div className={`text-slate-900 mb-10 w-[100vw] overflow-hidden flex flex-col gap-4 items-center`}>
      <div>
        <div className='w-full flex flex-col gap-4 items-center'>
          <Image src={`${product?.image}`} alt="product image" width={500} height={500}
            className='w-full max-w-[600px] rounded-lg shadow-lg'
          />
          <div className='flex gap-4 w-[100%] px-2'>
            <div className='flex-1 rounded-lg shadow-lg'>
              <Image src={`${product?.image}`} alt="product image" width={200} height={200} className='' />
            </div>
            <div className='flex-1 rounded-lg shadow-lg'>
              <Image src={`${product?.image}`} alt="product image" width={200} height={200} className='' />
            </div>
            <div className='flex-1 rounded-lg shadow-lg'>
              <Image src={`${product?.image}`} alt="product image" width={200} height={200} className='' />
            </div>
          </div>
        </div>
        {/* call to action */}
        <div className='flex flex-col gap-2 px-10 my-5'>
          <button className='bg-primary rounded-md py-2 px-4 text-white hover:bg-primaryHover'>Buy Now</button>
          <div>
            <span>
              Chat Us on Whatsapp
            </span>
            <span>
              {/* whatsapp component coming here */}
            </span>
          </div>
          <div>
            <p>
              <span>Call Us: </span>
              <span>081308513245</span>
            </p>
          </div>
        </div>
        {/* product description */}
        <div className='p-4'>

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
          <button className='text-primary'>More Details...</button>
        </div>
      </div>
    </div >
  )
}

export default Page;