import React from 'react'
import FaqLayout from './faqLayout/FaqLayout'
import { faqs } from '@/data/constant'

const Faq = () => {
  return (
    <div className='bg-white/20 backdrop-blur-lg border border-white/10 w-[90%] max-w-[600px] max-h-[800px] md:max-h-[1200px] rounded-lg shadow-lg mb-10 flex flex-col items-center p-5'>
      <h2 className='text-xl text-secondary font-bold mb-5'>Frequently Asked Questions</h2>
      <section className='flex flex-col gap-5 w-full items-center max-h-[600px] overflow-y-auto'>
        {faqs.map((faq, i) => (
          <FaqLayout key={i} title={faq.title} faqs={faq.FAQs} i={i} />
        ))}
      </section>
    </div>
  )
}

export default Faq