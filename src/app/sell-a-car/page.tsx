import SellCarForm from '@/components/forms/SellCarForm'
import React from 'react'

const Page = () => {
    return (
        <div className='w-full max-w-[600px] p-4 mt-[100px]'>
            <h1 className='text-3xl font-bold font-mono text-center'>Turn your car into cash easily - fast, secure, and hassle-free</h1>
            <h3 className='mt-10 text-lg font-semibold text-primary text-center'>Kindly fill the form below to book an appointment for your car evaluation</h3>
            <SellCarForm />
        </div>
    )
}

export default Page