import Image from 'next/image';
import {FaLinkedin, FaGithub} from 'react-icons/fa';


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <div className="mt-32 flex w-200 justify-between">
        <div className="mt-16 border border-red-400">
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
        <div className="mt-16 border border-blue-400 rounded">
          <Image
            src='/sample_pfp.jpg'
            alt='my pfp'
            width={200}
            height={200}
            className=''
          />   
        </div>
      </div>
      <div>
      hihihi
      </div>

      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer> */}
    </div>
  );
}
