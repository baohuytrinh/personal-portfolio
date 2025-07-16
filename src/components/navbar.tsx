import React from 'react';
import Link from 'next/link';


function NavBar() {
  return (
    <nav className='flex gap-6 p-4 justify-center bg-gray-900 text-blue'>
        <Link href={"/"} className='hover:underline' >Home</Link>
        <Link href={"/Projects"} className='hover:underline' >Projects</Link>
        <Link href={"/Contact"} className='hover:underline' >Contact</Link>
    </nav>
  )
}

export default NavBar