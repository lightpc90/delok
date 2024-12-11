'use client'

import { useState } from 'react'

const BuyButton = () => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <div className='flex flex-col gap-2 px-10 my-5 w-full max-w-[400px]'>
            <button onClick={() => { setShow(!show) }} className='bg-primary rounded-md py-2 px-4 text-white hover:bg-primaryHover'>Buy Now</button>
            {show && <div>
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
            </div>}
        </div>
    )
}

export default BuyButton