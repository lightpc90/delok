import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed bg-primary top-0 left-0 flex items-center justify-between gap-4 h-20 w-full px-4'>
        <span className='h-[50px] w-[50px] rounded-full bg-accent flex items-center justify-center'>logo</span>
        <span>Links</span>
        <span>Mobile Menu</span>
    </nav>
  )
}

export default Navbar