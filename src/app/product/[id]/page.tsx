
import { cars } from '../../../data/constant'
import { Car } from "@/types/types"
import Image from 'next/image'
import BuyButton from './BuyButton'
import PrimaryDescription from './PrimaryDescription'

type Params =Promise<{ id: string }>

const Page = async ({ params }: { params: Params }) =>  {
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
        <BuyButton />
        {/* product description */}
        <div className={`p-4`}>

        <PrimaryDescription product={product} />
        <button className='text-primary'>More Details...</button>
        </div>
      </div>
    </div >
  )
}

export default Page;