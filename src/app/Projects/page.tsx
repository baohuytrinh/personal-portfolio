import React from 'react'
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {

  const projects = [
    {
      title: "Sample Project",
      description: "This is a sample project description.",
      image: "/sample_project.png", 
      tags: ["React", "Next.js", "TailwindCSS"],
      links: [
        { label: "Source", url: "#" },
        { label: "Website", url: "#" }
      ]
    },

    {
      title: "Sample Project",
      description: "This is a sample project description. This will be changed in the near future",
      image: "/sample_project.png", 
      tags: ["React", "Next.js", "TailwindCSS"],
      links: [
        { label: "Source", url: "#" },
        { label: "Website", url: "#" }
      ]
    },

    {
      title: "Sample Project",
      description: "This is a sample project description.",
      image: "/sample_project.png", 
      tags: ["React", "Next.js", "TailwindCSS"],
      links: [
        { label: "Source", url: "#" },
        { label: "Website", url: "#" }
      ]
    },
    
  ];

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4 mx-auto max-w-200 justify-center flex mt-10 mb-10">my projects.</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-200 mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  )
}

