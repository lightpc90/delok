import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";

const ChatButton = () => {
  return (
    <div className='fixed bottom-4 right-4 w-12 h-12 bg-green-900 rounded-full flex items-center justify-center'>
        <button>
              <RiWhatsappFill size={30}/>
        </button>
    </div>
  )
}

export default ChatButton