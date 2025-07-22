import Image from 'next/image';
import { PiGithubLogoLight } from "react-icons/pi";
import { PiGlobeThin } from "react-icons/pi";


const getIcon = (iconType: string) => {
  switch(iconType) {
    case 'github':
      return <PiGithubLogoLight size={16} />;
      case 'website':
        return <PiGlobeThin size={16} />;
      default:
        return null;
  }
};

interface ProjectLink {
  label: string;
  url:string;
  iconType: string;
}

interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="mb-8 bg-none p-0 flex flex-col w-full justify-between">
      <div className=''>
        <div className="w-full aspect-[16/9] relative rounded-t-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-left"
          />
        </div>
      </div>

      <div className='border-x-2 border-b-2 border-gray-500 rounded-b-2xl flex flex-1 flex-col pb-3'>
        <div className=' flex-1 px-2 mb-3 mt-2'>
          <h3 className=" text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-gray-300 text-[12px]">{project.description}</p>
        </div>
        
        <div className='justify-around px-2'>
          <div className="flex flex-wrap gap-1.5 ">
            {project.tags.map(tag => (
              <span key={tag} className="bg-gray-800 text-[9px] px-2 py-1 rounded">{tag}</span>
            ))}
          </div>

          <div className="flex gap-2 mt-2">
            {project.links.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1 rounded transition"
              >
                {getIcon(link.iconType)}
                {link.label}
              </a>
            ))}
          </div>
        </div>


      </div>


    </div>
  );
}