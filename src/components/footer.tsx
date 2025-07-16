import React from 'react';
import Link from 'next/link';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <footer className='flex gap-3 p-4 justify-center'>
        <a
        href="https://www.linkedin.com/in/baohuytrinh/"
        target="_blank"
        rel="noopener noreferrer"
        >
            <FaLinkedin size={28} className='hover:text-blue-500 transition-colors' />
        </a>
        <a
        href="https://github.com/baohuytrinh"
        target="_blank"
        rel="noopener noreferrer"
        >
            <FaGithub size={28} className="hover:text-gray-400 transition-colors" />
        </a>
    </footer>
  )
}

export default Footer