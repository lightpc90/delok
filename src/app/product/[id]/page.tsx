
import { cars } from '../../../data/constant'
import { Car } from "@/types/types"
import Image from 'next/image'
import BuyButton from './BuyButton'
import PrimaryDescription from './PrimaryDescription'
import MoreDetails from './MoreDetails'
import { IoHome } from "react-icons/io5";
import Link from 'next/link'

type Params = Promise<{ id: string }>

const Page = async ({ params }: { params: Params }) => {
  console.log("products: ", cars)
  const getParams = await params
  console.log("params: ", getParams)
  const product = cars.find((car: Car) => car.id == getParams.id)
  console.log("product: ", product)
  console.log()
  return (
    <div className={`text-slate-900 mb-10 w-[100vw] overflow-hidden flex flex-col gap-4 items-center mt-[80px]`}>
      <div className='w-full flex flex-col gap-4 items-center'>
        <div className='w-full max-w-[800px] flex flex-col gap-4 items-center'>
          {/* image, back button and gradient */}
          <div className='relative w-[100%] '>
            <Image src={`${product?.image}`} alt="product image" width={500} height={500}
              className='w-full  rounded-lg shadow-lg'
            />
            <div className={`absolute top-0 left-0 p-4 w-full h-full bg-gradient-to-r opacity-30 from-primary to-secondary`}>
              <div className='text-white text-xl font-bold'>
                <Link href="/">
                  <IoHome size={25} />
                </Link>
              </div>
            </div>
          </div>
          {/* Image selection section */}
          <div className='flex gap-4 w-[100%] px-2'>
            <div className='flex-1 rounded-lg shadow-lg'>
              <Image src={`${product?.image}`} alt="product image" width={200} height={200} className='bg-cover w-full h-full' />
            </div>
            <div className='flex-1 rounded-lg shadow-lg'>
              <Image src={`${product?.image}`} alt="product image" width={200} height={200} className='bg-cover w-full h-full' />
            </div>
            <div className='flex-1 rounded-lg shadow-lg'>
              <Image src={`${product?.image}`} alt="product image" width={200} height={200} className='bg-cover w-full h-full' />
            </div>
          </div>
        </div>
        {/* call to action */}
        <BuyButton />
        {/* product description */}
        <div className={`p-4 w-full max-w-[800px]`}>
          <PrimaryDescription product={product} />
          {/* <button className='text-primary'>More Details...</button> */}
          <MoreDetails product={product} />
        </div>
      </div>
    </div >
  )
}

export default Page;