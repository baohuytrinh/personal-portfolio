import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiMapPin} from "react-icons/fi";
import { FaArrowRightToBracket } from "react-icons/fa6";

import { featuredProjects } from '@/data/featuredProjects';
import Link from 'next/link';
import SkillsSection from '@/components/skillsSection';
import FeaturedProjectCard from '@/components/FeaturedProjectCard';
import { RiH2 } from 'react-icons/ri';




export default function Home() {
  return (
    <div className='w-full items-center font-inter' >

      {/* top portion (header, desc, pfp) */}
      <div className=" max-w-170 mt-4 mx-auto grid items-center justify-items-center">
        <div className=" mx-auto py-4 mb-4 flex flex-col md:flex-row w-full justify-between items-center md:items-start">

          <div className="grid order-1 md:order-2 mt-8 md:mt-10 items-center justify-center flex flex-shrink-0">
            <Image
              src='/pfp.jpg'
              alt='my pfp'
              width={205}
              height={300}
              className='justify-center mx-auto rounded-lg border border-gray-500'
            />
            <div className='flex grid px-1 pt-1 justify-center'>
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

            <header className=" md:mr-10 text-2xl md:text-4xl py-2 flex justify-center md:justify-center">
              <h1 className="mr-2 font-bold">Hi, I'm Bao-Huy </h1>
              <p className="text-gray-300 text-xs flex justify-center items-center">
                {"(bow💥- hwee)"}
              </p>
            </header>
            
            <h1 className=" text-gray-400 md:text-justify text-start text-md md:text-l top-1 mx-left flex justify-center md:justify-start px-0 md:px-2 py-2 mr-0 md:mr-10">
            I'm a 3rd-year Computer Science major at UMass Amherst with a minor in Mathematics, aspiring to become a Full-Stack / Software Engineer.
            </h1>

            <h2 className=" text-gray-400 md:text-justify text-start flex flex-col gap-[32px] row-start-2 justify-start py-2 mr-0 md:mr-10 px-0 md:px-2 text-md">
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


      {/* projects */}
      <div className=' w-full justify-center py-4 px-6 md:px-0 mb-4'>
        <div className=' flex max-w-170 mx-auto justify-between'>
          <h1 className='font-bold flex max-w-180 text-[30px] py-2 '>
            recent projects
          </h1>
          <div className='max-w-180 flex '>
            <Link href={"/Projects"} className='flex items-center transition-transform duration-300 ease-in-out hover:-translate-x-1 hover:text-gray-300 transition-colors'>
              view projects 
              <FaArrowRightToBracket className='ml-1'/>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-170 mx-auto">
          {featuredProjects.map((project, idx) => (
            <FeaturedProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
