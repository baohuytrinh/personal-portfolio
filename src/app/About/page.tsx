import Image from 'next/image'
import React from 'react'
import SkillsSection from '@/components/skillsSection'
import {FiMapPin, FiLinkedin, FiGithub, FiMail} from "react-icons/fi";
  import { formatWithOptions } from 'util'

export default function About() {
  return (
    <div className=' font-inter flex justify-center grid grid-cols-1 max-w-170 mx-auto '>
        <div className=" max-w-170 mt-4 mx-auto grid items-center justify-items-center">
          <div className=" mx-auto py-4 mb-4 flex flex-col md:flex-row w-full justify-between items-center md:items-start">

            <div className="grid order-1 md:order-2 mt-8 md:mt-10 items-center justify-center flex flex-shrink-0">
              <Image
                src='/pfp.jpg'
                alt='my pfp'
                width={275}
                height={300}
                className='rounded-lg border border-gray-500'
              />
              <div className='flex px-1 pt-1 justify-between'>
                <div className="flex items-center gap-1 ">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-400 text-sm font-medium">
                      Available for work
                    </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-0.5">
                    <FiMapPin size={16} className='text-red-400'/>
                    <span>UMass Amherst</span>
                  </div>
                </div>
              </div>
              <div className='flex mt-1.5 justify-center gap-3'> 
                <a
                  href="https://www.linkedin.com/in/baohuytrinh/"
                  target="_blank"
                  rel="noopener noreferrer"

                >
                  <FiLinkedin size={25} className='transition:transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-blue-500' />
                </a> 
                <a
                  href="https://github.com/baohuytrinh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={25} className="transition:transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-gray-400" />
                </a>
                <a 
                  href=""
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  <FiMail size={25} className="transition:transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-red-400"/>
                </a>
              </div>   
              
            </div>

          <div className="order-2 md:order-1 mt-5 md:mt-10 text-center md:text-left px-5 md:px-0"> 

            <header className=" text-2xl md:text-4xl py-2 flex justify-center">
              <h1 className=" mr-10 font-bold">Bao-Huy Trinh</h1>
              
            </header>
            
            <h1 className="text-gray-400 md:text-justify text-start text-md md:text-l top-1 mx-left flex justify-center md:justify-start px-0 md:px-2 py-2 mr-0 md:mr-10">
            I'm a 3rd-year Computer Science major at UMass Amherst with a minor in Mathematics, aspiring to become a Full-Stack / Software Engineer.
            </h1>

            <h2 className="text-gray-400 md:text-justify text-start flex flex-col gap-[32px] row-start-2 justify-start py-2 mr-0 md:mr-10 px-0 md:px-2 text-md">
            Passionate about building products and solving problems, I’m learning and developing every day through personal projects focused on full-stack development. I'm currently seeking internship opportunities where I can gain more hands-on experience, contribute to real-world projects, and grow alongside experienced engineers.
            </h2>

            <h3 className="flex gap-[32px] row-start-2 justify-center mt-0 py-2 text-md font-bold mr-0 md:mr-10">
            Eager to learn, build, and make an impact.
            </h3>
            
          </div>
          
        </div>
      </div>
      
      {/* skills */}
      <SkillsSection/>
    </div>
  )
}

