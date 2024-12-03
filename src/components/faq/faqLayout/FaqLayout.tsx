'use client'

import { useState } from 'react'
import { FiArrowRight } from "react-icons/fi";
import { BsArrowDownCircleFill } from "react-icons/bs";

const FaqLayout = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='bg-white w-[95%] rounded-lg shadow-md text-slate-950 p-4'>
            <div onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-2 justify-between pb-4'>
                <h3 className='font-bold'>{question}</h3>
                {isOpen ? (
                    <BsArrowDownCircleFill size={25} />
                ) : (
                    <FiArrowRight size={25} />
                )}
            </div>
            {isOpen && <p>{answer}</p>}
        </div>
    )
}

export default FaqLayout