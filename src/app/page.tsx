import Image from 'next/image';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import { FaArrowRightToBracket } from "react-icons/fa6";

import { featuredProjects } from '@/data/featuredProjects';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';


export default function Home() {
  return (
    <>
    <div className="font-sans grid items-center justify-items-center gap-16 pb-12">

      <div className="flex w-180 justify-between">
        <div className="mt-16 ">
          <header className='font-sans text-4xl mt-16 py-2 flex'>
            Hi, I'm Bao-Huy <p className='text-xs flex justify-center items-center pl-3'>{"(bow💥 - hwee)"}</p>
          </header>
          <h1 className='font-sans text-l top-1 mx-auto flex justify-start py-2 max-w-100'>
            3rd year student at UMass Amherst pursuing a Bachelor's of Science in Computer Science, minoring in Mathematics
          </h1>
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start py-2 text-size-30">
            software engineer
          </main>
          <div className='flex my-3'>
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
          </div>
        </div>
        <div className="mt-25 rounded items-center justify-center flex">
          <Image
            src='/pfp.jpg'
            alt='my pfp'
            width={200}
            height={200}
            className=''
          />   
        </div>
      </div>
    </div>
    
    <div className='w-full border-blue-200'>
      <div className='flex max-w-180 mx-auto justify-between'>
        <h1 className=' flex max-w-180 text-[25px] py-2 '>
          recent projects
        </h1>
        <div className='max-w-180 flex '>
          <Link href={"/Projects"} className='flex items-center '>
            view all projects 
            <FaArrowRightToBracket className='ml-2'/>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-180 mx-auto">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      
    </div>
    </>
  );
}
