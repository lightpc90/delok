import React from 'react'

const SellCarForm = () => {
  return (
    
      <form className='flex flex-col gap-4 p-4 w-full justify-center'>
          <p className='text-center font-semibold text-secondary'>
              Owner Details
          </p>
          {/* onwer's name */}
          <label htmlFor='name' className='flex flex-col' >Your Full Name
              <input type="text" id='name' placeholder='Your Full Name'
                  className='border-2 border-gray-300 rounded-md p-2' />
          </label>
          {/* onwer's ID */}
          <label htmlFor='ownerID' className='flex flex-col' >Your ID Type
              <select id='ownerID'
                  className='border-2 border-gray-300 rounded-md p-2' >
                  <option>Driver License</option>
                  <option>National ID</option>
                  <option>{`Int'l Passport`}</option>
              </select>
          </label>

          {/* onwer's ID File */}
          <label htmlFor='ownerIDFile' className='flex flex-col' >Upload your ID
              <input type="file" id='ownerIDFile'
                  className='border-2 border-gray-300 rounded-md p-2' />
          </label>
          {/* phone */}
          <label htmlFor='phone' className='flex flex-col' >Your Phone Number
              <input type="text" id='phone' placeholder='Contact of the seller'
                  className='border-2 border-gray-300 rounded-md p-2' />
          </label>
          {/* email */}
          <label htmlFor='email' className='flex flex-col' >Your Email
              <input type="email" id='email' placeholder='Contact of the seller'
                  className='border-2 border-gray-300 rounded-md p-2' />
          </label>
          <p className='text-center font-semibold text-secondary'>
              Car Details
          </p>
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
              <input type="number" id='year' placeholder='Year of the car'
                  className='border-2 border-gray-300 rounded-md p-2' />
          </label>
          {/* car doc */}
          <label htmlFor='carDoc' className='flex flex-col' >Upload Your Car Doc.
              <input type="file" id='carDoc'
                  className='border-2 border-gray-300 rounded-md p-2' />
          </label>
          {/* location */}
          <label htmlFor='location' className='flex flex-col' >Location of the car

              <input type="text" id='location' placeholder='Location of the car'
                  className='border-2 border-gray-300 rounded-md p-2' />
          </label>
          {/* price */}
          <label htmlFor='price' className='flex flex-col' >Expected Price of the car
              <input type="number" id='price' placeholder='Price of the car'
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

          <button className='bg-primary rounded-md p-1 md:p-2 text-white hover:bg-primaryHover'>Submit</button>
      </form>
  )
}

export default SellCarForm