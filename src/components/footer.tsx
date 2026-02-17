import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail} from "react-icons/fi";

function Footer() {
  return (
    <footer className='gap-[24px] p-4  mb-10 max-w-170 w-full mx-auto '>
      <div className='mx-auto  flex justify-between'>

        <h1 className='text-[14px] text-gray-600 flex my-auto'>
        © 2026 Bao-Huy Trinh
        </h1>

        <div className=' flex gap-3'>
        <a
                href="https://www.linkedin.com/in/baohuytrinh/"
                target="_blank"
                rel="noopener noreferrer"

              >
                <FiLinkedin size={20} className='transition:transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-blue-500' />
              </a> 
              <a
                href="https://github.com/baohuytrinh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={20} className="transition:transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-gray-400" />
              </a>
              <a 
                href=""
                target="_blank"
                rel='noopener noreferrer'
              >
                <FiMail size={20} className="transition:transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-red-500"/>
              </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer