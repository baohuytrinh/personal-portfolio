'use client';

import React, { useState } from 'react';
import Image from 'next/image';


interface ExperienceEntry {
  dates: string;
  company: string;
  role: string;
  responsibilities: string;
  imageUrl?: string;
  icon?: React.ReactNode; 
}

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'studies'>('work');

  const workExperience: ExperienceEntry[] = [
    {
      dates: 'Sep. 2025 - Dec. 2025',
      role: 'Software Engineer Intern',
      company: 'Scholarty',
      responsibilities: 'Worked on a student networking platform, building and improving backend systems and APIs to help students manage events and connect across campuses.',
      imageUrl: '/scholarty_logo.jpg',
    },
    {
      dates: 'Sep. 2025 - Dec. 2025',
      role: 'Undergraduate Teaching Assistant',
      company: 'University of Massachusetts, Amherst',
      responsibilities: 'Helped students learn data structures and algorithms in Python, holding office hours and giving support to make coding assignments and problem-solving easier.',
      imageUrl: '/umassamherst_logo.jpg', 
    },
    {
      dates: 'June 2025 - Aug. 2025',
      role: 'Machine Learning Research Assistant ',
      company: 'University of Massachusetts, Amherst',
      responsibilities: 'Built a recommendation system to give better personalized suggestions, analyzing data and collaborating with the lab to fine-tune results.',
      imageUrl: '/umassamherst_logo.jpg', 
    },
    
    {
      dates: 'Sep. 2024 - Dec. 2024',
      role: 'Software Engineer Intern',
      company: 'ProScout.Ai',
      responsibilities: 'Created a smart greenhouse system that tracks plant health and environmental data, automatically waters plants, and shows insights on a dashboard.',
      imageUrl: '/proscout_ai_logo.jpg', 
    },
  ];

  const education: ExperienceEntry[] = [
    {
      dates: 'Aug. 2024 - Present',
      company: 'University of Massachusetts, Amherst',
      role: 'B.S. Computer Science, Minor in Mathematics',
      responsibilities: 'Relevant coursework: Data Structures, Algorithms, Web Programming, Discrete Mathematics, Programming Methodologies, Object-Oriented Programming in Java and Python, Linear Algebra',
      imageUrl: '/umassamherst_logo.jpg',
    },
  ];

  const currentEntries = activeTab === 'work' ? workExperience : education;

  return (
    <div className="w-full flex justify-center mb-10 px-5 md:px-0">
      <div className="max-w-170 w-full">
        <h2 className="font-bold flex justify-center md:justify-start max-w-180 text-[30px] pb-2">
          Experience
        </h2>
        
        {/* Tabs */}
        <div className="flex gap-2 mb-4 w-full">
          <button
            onClick={() => setActiveTab('work')}
            className={`flex-1 px-4 py-0.5 rounded-md font-medium transition-colors ${
              activeTab === 'work'
                ? 'bg-white text-gray-900'
                : 'text-gray-400 hover:text-gray-300 '
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setActiveTab('studies')}
            className={`flex-1 px-4 py-0.5 rounded-md font-medium transition-colors ${
              activeTab === 'studies'
                ? 'bg-white text-gray-900'
                : 'text-gray-400 hover:text-gray-300 '
            }`}
          >
            Education
          </button>
        </div>

        {/* Experience Entries */}
        {/* Experience Entries with Timeline */}
        <div className="border-2 border-white rounded-3xl px-5 relative py-1">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[44px] top-0 bottom-0 w-0.5 bg-white"></div>
          
          {currentEntries.map((entry, index) => (
            <div key={index} className="flex gap-4 relative">
              {/* Icon/Image Circle with Timeline Connection */}
              <div className="flex-shrink-0 relative z-10 flex justify-center items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center border-gray-600 overflow-hidden">
                  {entry.imageUrl ? (
                    <Image
                      src={entry.imageUrl}
                      alt={entry.company}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : entry.icon ? (
                    entry.icon
                  ) : (
                    <div className="w-6 h-6 rounded bg-gray-500"></div>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 py-3">
                <div className="text-sm text-gray-400 mb-1">{entry.dates}</div>
                <div className="font-bold text-white ">{entry.role}</div>
                <div className="text-gray-300 mb-1">{entry.company}</div>
                <div className="text-gray-400 text-sm">{entry.responsibilities}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;