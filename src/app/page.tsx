import Image from 'next/image';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import { featuredProjects } from '@/data/featuredProjects';
import ProjectCard from '@/components/ProjectCard';


export default function Home() {
  return (
    <>
    <div className="font-sans grid items-center justify-items-center gap-16 pb-12 border border-blue-200">

      <div className="flex w-180 justify-between">
        <div className="mt-16 border">
          <header className='font-sans text-6xl mt-16 py-2'>
            hi, i'm bao-huy 
          </header>
          <h1 className='font-sans text-xl top-1 mx-auto flex justify-start py-2'>
            welcome to my portfolio
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
        <div className="mt-16 border rounded">
          <Image
            src='/sample_pfp.jpg'
            alt='my pfp'
            width={200}
            height={200}
            className=''
          />   
        </div>
      </div>
    </div>
    
    <div className='w-full border border-blue-200'>
      <h1 className='flex max-w-180 mx-auto text-[40px] pt-4 pb-4 '>
        featured projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-180 mx-auto">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
    </>
  );
}
