import EachFaq from './EachFaq';

const FaqLayout = ({ title, faqs, i }: { title: string, faqs: { question: string, answer: string }[], i: number }, ) => {
    return (
        <div className='flex flex-col gap-4 items-center w-full'>
            <h2 className='font-bold text-primary text-xl'>{`${i+1}. ${title}`}</h2>
            {faqs.map((faq, i) => (

               <EachFaq key={i} faq={faq} i={i} />
            ))}
        </div>
    )
}

export default FaqLayout