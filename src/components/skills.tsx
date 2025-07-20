import React from "react";

interface SkillCardProps {
    icon: React.ReactNode;
    name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name}) => {
    return (
        <div className="border-blue-400 border m-3">
            <div className="">
                {icon}
            </div>
            <span className="border flex justify-center">
                {name}
            </span>
        </div>
    )
}

export default SkillCard;