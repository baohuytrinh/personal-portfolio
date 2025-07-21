import React from "react";
import SkillCard from "./skills";

import { TbBrandGit } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";


import {
    RiJavascriptFill,
    RiJavaFill,
    RiHtml5Fill,
    RiReactjsLine,
    RiNodejsFill,
    RiNextjsFill,
    RiTailwindCssFill,


} from 'react-icons/ri';

import { BiLogoTypescript, 
        BiLogoCss3, 
        BiLogoPython,
        BiLogoMongodb,
        BiLogoDocker,


} from "react-icons/bi";



const SkillsSection: React.FC = () => {
    const skills = [
        { name: 'JavaScript', icon: <RiJavascriptFill/>},
        { name: 'TypeScript', icon: <BiLogoTypescript/>},
        { name: 'Java', icon: <RiJavaFill/>},
        { name: 'Python', icon: <BiLogoPython/>},
        { name: 'React', icon: <RiReactjsLine/>},
        { name: 'Node.js', icon: <RiNodejsFill/>},
        { name: 'Git', icon: <TbBrandGit/>},
        { name: 'MongoDB', icon: <SiMongodb/>},
        { name: 'Tailwind', icon: <RiTailwindCssFill/>},
        { name: 'Next.js', icon: <RiNextjsFill/>},
        { name: 'HTML', icon: <RiHtml5Fill/>},
        { name: 'CSS', icon: <BiLogoCss3/>},
    ];

    return (
        <div className="w-full flex justify-center px-4">
            <div className="max-w-172 w-full">
                <h2 className="font-bold flex justify-center md:justify-start max-w-180 text-[30px] pb-2">
                    skills
                </h2>
                <div className="gap-4 grid grid-cols-3 md:grid-cols-4 w-full">
                    {skills.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            icon={skill.icon}
                            name={skill.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillsSection