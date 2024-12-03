'use client'

import React, { useState } from 'react'
import { FiArrowRight } from "react-icons/fi";
import { BsArrowDownCircleFill } from "react-icons/bs";

const EachFaq = ({ faq, i }: { faq: { question: string, answer: string }, i: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div key={i} className=' bg-white w-[95%] rounded-lg shadow-md text-slate-950 p-4'>
            <div onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-2 justify-between pb-4 cursor-pointer hover:text-primary'>
                <h3 className='font-bold'>{faq.question}</h3>
                <div className='flex-shrink-0 flex-grow-0'>

                    {isOpen ? (
                        <BsArrowDownCircleFill size={25} />
                    ) : (
                        <FiArrowRight size={25} />
                    )}
                </div>
            </div>
            {isOpen && <>{faq.answer}</>}
        </div>
    )
}

export default EachFaq