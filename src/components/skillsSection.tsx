import React from "react";
import SkillCard from "./skills";

import { TbBrandGit } from "react-icons/tb";
import { SiMongodb, SiPostgresql } from "react-icons/si";


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
        BiLogoSpringBoot,
        BiLogoPostgresql,
        BiLogoGraphql,
} from "react-icons/bi";

import { VscAzure } from "react-icons/vsc";


type ColorKey = 'yellow' | 'blue' | 'orange' | 'green' | 'cyan' | 'red' | 'teal' | 'slate' | 'java' | 'python' | 'white' | 'navy' | 'pink';

interface Skill {
    name: string;
    icon: React.ReactNode;
    color: ColorKey;
}

const SkillsSection: React.FC = () => {
    const skills: Skill[] = [
        { name: 'TypeScript', icon: <BiLogoTypescript/>, color: 'blue'},
        { name: 'React.js', icon: <RiReactjsLine/>, color: 'cyan'},
        { name: 'JavaScript', icon: <RiJavascriptFill/>, color: 'yellow'},
        { name: 'Java', icon: <RiJavaFill/>, color: 'java'},
        { name: 'Python', icon: <BiLogoPython/>, color: 'python'},
        { name: 'Node.js', icon: <RiNodejsFill/>, color: 'green'},
        { name: 'MongoDB', icon: <SiMongodb/>, color: 'green'},
        { name: 'Git', icon: <TbBrandGit/>, color: 'white'},
        { name: 'Next.js', icon: <RiNextjsFill/>, color: 'white'},
        { name: 'TailwindCSS', icon: <RiTailwindCssFill/>, color: 'teal'},
        { name: 'HTML5', icon: <RiHtml5Fill/>, color: 'orange'},
        { name: 'CSS', icon: <BiLogoCss3/>, color: 'blue'},
        { name: 'PostgreSQL', icon: <BiLogoPostgresql />, color: 'navy'},
        { name: 'Spring Boot', icon: <BiLogoSpringBoot />, color: 'green'},
        { name: 'Azure', icon: <VscAzure />, color: 'blue'},
        { name: 'GraphQL', icon: <BiLogoGraphql />, color: 'pink'},
    ];

    return (
        <div className="w-full flex justify-center mb-4 px-5 md:px-0">
            <div className="max-w-170 w-full">
                <h2 className="font-bold flex justify-center md:justify-start max-w-180 text-[30px] pb-2">
                    Skills
                </h2>
                <div className="gap-4 grid grid-cols-3 md:grid-cols-4 w-full">
                    {skills.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            icon={skill.icon}
                            name={skill.name}
                            color={skill.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillsSection