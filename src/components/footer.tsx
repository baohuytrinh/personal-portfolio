import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin} from "react-icons/fi";

function Footer() {
  return (
    <footer className='flex gap-[24px] p-4 justify-center '>
        <a
        href="https://www.linkedin.com/in/baohuytrinh/"
        target="_blank"
        rel="noopener noreferrer"
        >
            <FiLinkedin size={28} className='hover:text-blue-500 transition-colors' />
        </a>
        <a
        href="https://github.com/baohuytrinh"
        target="_blank"
        rel="noopener noreferrer"
        >
            <FiGithub size={28} className="hover:text-gray-400 transition-colors" />
        </a>
    </footer>
  )
}

export default Footer