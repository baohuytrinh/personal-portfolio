"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';


function NavBar() {
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(0.3, 1 - scrollY/200)
      setBgOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className='flex gap-6 p-4 justify-center bg-gray-900 text-blue sticky top-0 w-200 mx-auto border border-black rounded-3xl transition-colors duration-300'
      style={{
        backgroundColor: `rgba(17, 24, 39, ${bgOpacity})`,
        backdropFilter: 'blur(4px)',
      }}
      >
      
        <Link href={"/"} className='hover:underline' >Home</Link>
        <Link href={"/Projects"} className='hover:underline' >Projects</Link>
        <Link href={"/Contact"} className='hover:underline' >Contact</Link>
    </nav>
  )
}

export default NavBar