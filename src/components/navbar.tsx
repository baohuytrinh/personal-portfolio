"use client";

import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
      <nav 
        className=' font-bold border border-gray-600 flex gap-4 p-4 justify-center sticky top-8 max-w-80 w-full mx-auto rounded-4xl transition-colors duration-300 z-50 h-15'
        style={{
          backgroundColor: 'transparent',
          backdropFilter: 'blur(4px)',
        }}
        >
        
          <Link href={"/"} className='transition-all ease-in-out duration-300 hover:scale-105  hover:-translate-y-1 hover:px-1 hover:text-gray-400' >Home</Link>
          <Link href={"/About"} className='transition-all ease-in-out duration-300 hover:-translate-y-1 hover:px-1 hover:text-gray-400' >About</Link>
          <Link href={"/Projects"} className='transition-all ease-in-out duration-300 hover:-translate-y-1 hover:px-1 hover:text-gray-400' >Projects</Link>
          <Link href={"/Contact"} className='transition-all ease-in-out duration-300 hover:-translate-y-1 hover:px-1 hover:text-gray-400' >Contact</Link>
      </nav>
  )
}

export default NavBar