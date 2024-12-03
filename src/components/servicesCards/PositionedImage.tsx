import Image from 'next/image'
import React from 'react'

const PositionedImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className='absolute top-[30%] left-[35%] h-[80%] w-[80%] '>
        <Image src={imageUrl} alt={imageUrl} width={500} height={500} className='w-full h-full object-center '/>
    </div>
  )
}

export default PositionedImage