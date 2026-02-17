import React from "react";
import { brotliDecompress } from "zlib";

type ColorKey = 'yellow' | 'blue' | 'orange' | 'green' | 'cyan' | 'red' | 'teal' | 'slate' | 'java' | 'python' | 'white' | 'navy' | 'pink';

interface SkillCardProps {
    icon: React.ReactNode;
    name: string;
    color: ColorKey;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, color}) => {

    const colorClasses = {
        yellow: {
            icon: 'group-hover:text-yellow-500 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-yellow-600',
            border: 'hover:border-yellow-400',
            shadow: 'hover:shadow-yellow-200/20'
        },
        blue: {
            icon: 'group-hover:text-blue-500 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-blue-600',
            border: 'hover:border-blue-400',
            shadow: 'hover:shadow-blue-200/20'
        },
        orange: {
            icon: 'group-hover:text-orange-500 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-orange-600',
            border: 'hover:border-orange-400',
            shadow: 'hover:shadow-orange-200/20'
        },
        green: {
            icon: 'group-hover:text-green-500 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-green-600',
            border: 'hover:border-green-400',
            shadow: 'hover:shadow-green-200/20'
        },
        cyan: {
            icon: 'group-hover:text-cyan-500 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-cyan-600',
            border: 'hover:border-cyan-400',
            shadow: 'hover:shadow-cyan-200/20'
        },
        red: {
            icon: 'group-hover:text-red-500 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-red-600',
            border: 'hover:border-red-400',
            shadow: 'hover:shadow-red-200/20'
        },
        teal: {
            icon: 'group-hover:text-teal-500 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-teal-600',
            border: 'hover:border-teal-400',
            shadow: 'hover:shadow-teal-200/20'
        },
        slate: {
            icon: 'group-hover:text-slate-500 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-slate-600',
            border: 'hover:border-slate-400',
            shadow: 'hover:shadow-slate-200/20'
        },
        white: {
            icon: 'group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-white',
            border: 'hover:border-white',
            shadow: 'hover:shadow-slate-200/20'
        },
        python: {
            icon: 'group-hover:text-blue-500 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-yellow-300',
            border: 'hover:border-white',
            shadow: 'hover:shadow-slate-200/20'
        },
        java: {
            icon: 'group-hover:text-orange-500 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-blue-400',
            border: 'hover:border-white',
            shadow: 'hover:shadow-white-200/20'
        },
        navy: {
            icon: 'group-hover:text-blue-400 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-blue-400',
            border: 'hover:border-blue-400',
            shadow: 'hover:shadow-blue-200/20'
        },
        pink: {
            icon: 'group-hover:text-pink-400 group-hover:-translate-y-0.5 ',
            text: 'group-hover:text-pink-400',
            border: 'hover:border-pink-400',
            shadow: 'hover:shadow-pink-200/20'
        }
    }

    const currentColors = colorClasses[color] || colorClasses.blue;

    return (
        <div 
            className={`group bg-transparent rounded-lg w-full border-gray-700 border py-0.5
            transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer hover:scale-105
            ${currentColors.border} ${currentColors.shadow}`}
        >
            <div 
                className={` transition-transform duration-300 text-4xl flex justify-center transition-colors duration-300 
                ${currentColors.icon}`}
            >
                {icon}
            </div>

            <span 
                className={` text-xs flex justify-center w-fit mx-auto transition-all duration-300  ${currentColors.text}`}
            >
                {name}
            </span>

        </div>
    )
}

export default SkillCard;