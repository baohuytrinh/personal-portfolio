import React from 'react'
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {

  return (
    <div className="min-h-screen p-4 flex grid w-180 mx-auto">
      <h1 className="text-4xl font-bold mb-4 flex mt-10 mb-10">
        my projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-180 mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  )
}

