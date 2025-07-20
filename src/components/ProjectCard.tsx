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
};

interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

interface ProjectCardProps {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-none border  rounded-xl p-4 flex flex-col gap-3 w-full max-w-110 h-full justify-between">
      <div className=''>

        <div className="w-full h-[200px] relative rounded overflow-hidden mb-3">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
  
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-gray-300 text-[12px]">{project.description}</p>
      </div>

      <div className='justify-around'>
        <div className="flex flex-wrap gap-2 ">
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
  );
}