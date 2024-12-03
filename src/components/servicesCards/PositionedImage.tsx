import Image from 'next/image'
import React from 'react'

const PositionedImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className='absolute top-0 left-0 h-full w-[350px] '>
        <Image src={imageUrl} alt={imageUrl} width={500} height={500} className='w-full h-full object-center object-contain '/>
    </div>
  )
}

export default PositionedImage