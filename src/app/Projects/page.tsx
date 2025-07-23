import React from 'react'
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {

  return (
    <div className="flex grid grid-cols-1 gap-4 max-w-170 mx-auto">
      <h1 className="text-4xl font-bold mb-4 flex mt-20 mb-10 mx-auto">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 max-w-180 mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  )
}

