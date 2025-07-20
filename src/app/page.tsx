import Image from 'next/image';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import { FaArrowRightToBracket } from "react-icons/fa6";

import { featuredProjects } from '@/data/featuredProjects';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';


export default function Home() {
  return (
    <div className='w-full items-center'>
      <div className="max-w-180 mx-auto font-sans grid items-center justify-items-center gap-16 pb-12">

        <div className="mx-auto p-4 flex flex-col md:flex-row w-full justify-between items-center md:items-start">

          <div className="order-1 md:order-2 mt-8 md:mt-10 items-center justify-center flex flex-shrink-0">
            <Image
              src='/pfp.jpg'
              alt='my pfp'
              width={250}
              height={250}
              className='rounded-lg'
            />   
          </div>

          <div className="order-2 md:order-1 mt-0 md:mt-16 text-center md:text-left">
            <header className='font-sans text-2xl md:text-4xl mt-8 md:mt-16 py-2 flex justify-center md:justify-start'>
              <h1 className='pr-2'>Hi, I'm Bao-Huy </h1>
              <p className='text-xs flex justify-center items-center'>
                {"(bow💥- hwee)"}
              </p>
            </header>
            <h1 className='font-sans text-sm md:text-l top-1 mx-auto flex justify-center md:justify-start py-2 max-w-100'>
              3rd year student at UMass Amherst pursuing a Bachelor's of Science in Computer Science, minoring in Mathematics
            </h1>
            <main className="flex flex-col gap-[32px] row-start-2 justify-start py-2 text-size-30">
              software engineer
            </main>
            <div className='flex my-3 justify-center md:justify-start gap-2'>
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
          
        </div>
      </div>
      
      <div className='w-full justify-center'>
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
    </div>
  );
}
