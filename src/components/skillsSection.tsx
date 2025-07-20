import React from "react";
import SkillCard from "./skills";

import {

} from 'react-icons/ai';

const SkillsSection: React.FC = () => {
    const skills = [
        { name: 'JavaScript', icon: null},
        { name: 'TypeScript', icon: null},
        { name: 'Java', icon: null},
        { name: 'Python', icon: null},
        { name: 'React', icon: null},
        { name: 'Node.js', icon: null},
        { name: 'Express', icon: null},
        { name: 'MongoDB', icon: null},
        { name: 'Tailwind', icon: null},
        { name: 'Next.js', icon: null},
        { name: 'HTML', icon: null},
        { name: 'CSS', icon: null},
    ];

    return (
        <div className="w-full border flex justify-center">
            <div className="max-w-180">
                <h2 className="flex justify-center">
                    Skills
                </h2>
                <div className="grid grid-cols-4">
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