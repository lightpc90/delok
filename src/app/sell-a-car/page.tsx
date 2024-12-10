import React from 'react'

const Page = () => {
    return (
        <div>
            <form className='flex flex-col gap-4 p-4'>
                {/* make */}
                <label htmlFor='make' className='flex flex-col' >Make of the car
                    <input type="text" id='make' placeholder='Name of the car'
                        className='border-2 border-gray-300 rounded-md p-2' />
                </label>
                {/* model */}
                <label htmlFor='model' className='flex flex-col' >Model of the car
                    <input type="text" id='model' placeholder='Price of the car'
                        className='border-2 border-gray-300 rounded-md p-2' />
                </label>
                {/* year */}
                <label htmlFor='year' className='flex flex-col' >Year of the car
                    <input type="text" id='year' placeholder='Year of the car'
                        className='border-2 border-gray-300 rounded-md p-2' />
                </label>
                {/* price */}
                <label htmlFor='price' className='flex flex-col' >Expected Price of the car
                    <input type="text" id='price' placeholder='Price of the car'
                        className='border-2 border-gray-300 rounded-md p-2' />
                </label>
                {/* transmission */}
                <label htmlFor='transmission' className='flex flex-col' >Transmission of the car
                    <input type="text" id='transmission' placeholder='Transmission of the car'
                        className='border-2 border-gray-300 rounded-md p-2' />
                </label>
                {/* engine */}
                <label htmlFor='engine' className='flex flex-col' >Engine of the car
                    <input type="text" id='engine' placeholder='Engine of the car'
                        className='border-2 border-gray-300 rounded-md p-2' />
                </label>
                {/* color */}
                <label htmlFor='color' className='flex flex-col' >Color of the car

                    <input type="text" id='color' placeholder='Color of the car'
                        className='border-2 border-gray-300 rounded-md p-2' />
                </label>
                {/* description */}
                <label htmlFor='description' className='flex flex-col' >Description of the car

                    <input type="text" id='description' placeholder='Description of the car'
                        className='border-2 border-gray-300 rounded-md p-2' />
                </label>
                {/* image */}
                <label htmlFor='image' className='flex flex-col' >Image of the car
                    <input type="file" id='image'
                        className='border-2 border-gray-300 rounded-md p-2' />
                </label>
                {/* location */}
                <label htmlFor='location' className='flex flex-col' >Location of the car

                    <input type="text" id='location' placeholder='Location of the car'
                        className='border-2 border-gray-300 rounded-md p-2' />
                </label>
                {/* contact */}
                <label htmlFor='contact' className='flex flex-col' >Contact of the seller
                    <input type="text" id='contact' placeholder='Contact of the seller'
                        className='border-2 border-gray-300 rounded-md p-2' />
                </label>
                <button className='bg-primary rounded-md p-1 md:p-2 text-white hover:bg-primaryHover'>Submit</button>
            </form>
        </div>
    )
}

export default Page