import Image from 'next/image';

interface ProjectLink {
  label: string;
  url:string;
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
    <div className="bg-[#181c23] border border-gray-700 rounded-xl p-4 flex flex-col gap-3 w-full max-w-100 h-full justify-around">

      <div className="w-full h-[200px] relative rounded overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-300 text-[12px]">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="bg-gray-800 text-[10px] px-2 py-1 rounded">{tag}</span>
        ))}
      </div>

      <div className="flex gap-2 mt-2">
        {project.links.map(link => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded transition"
          >
            {link.label}
          </a>
        ))}
      </div>

    </div>
  );
}