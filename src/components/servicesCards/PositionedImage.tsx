import Image from 'next/image'
import React from 'react'

const PositionedImage = () => {
  return (
    <div className='absolute top-[30%] left-[35%] h-[80%] w-[80%] '>
        <Image src={`/images/trans_honda.png`} alt='honda' width={500} height={500} className='w-full h-full object-center '/>
    </div>
  )
}

export default PositionedImage