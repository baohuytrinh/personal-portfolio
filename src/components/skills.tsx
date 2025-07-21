import React from "react";

interface SkillCardProps {
    icon: React.ReactNode;
    name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name}) => {
    return (
        <div className="bg-transparent  rounded-lg w-full border-gray-700 border py-0.5">
            <div className="text-4xl flex justify-center">
                {icon}
            </div>
            <span className="text-xs flex justify-center">
                {name}
            </span>
        </div>
    )
}

export default SkillCard;