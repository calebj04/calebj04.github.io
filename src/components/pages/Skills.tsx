import { useState, type ReactNode } from "react";
import Card from "../Card";
import { skills, type SkillData } from "../../assets/skills";

const SkillItem = ({
  skill,
  onEnter,
  onLeave,
}: {
  skill: SkillData;
  onEnter: () => void;
  onLeave: () => void;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`
        group/icon flex items-center justify-center
        transition-transform duration-300 hover:scale-110 cursor-pointer
        ${isAnimating ? "animate-[spin_0.8s_ease-in-out]" : ""}
      `}
      onAnimationEnd={() => setIsAnimating(false)}
    >
      <skill.Icon
        className="w-15 h-15 text-white drop-shadow-md transition-colors duration-300"
        onMouseEnter={(e) => (e.currentTarget.style.color = skill.color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
      />
    </div>
  );
};

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<SkillData | null>(null);

  const title: ReactNode = (
    <div className="group flex flex-col">
      <h1 className="text-4xl font-light tracking-tighter text-white drop-shadow-lg">
        Skills
      </h1>
      <div className="h-1 w-12 bg-[#ffc1ac] mt-2 rounded-full opacity-80 group-hover:opacity-100 group-hover:w-16.5 transition-all duration-500" />
    </div>
  );

  const body: ReactNode = (
    <div className="flex flex-col h-full justify-center items-center px-6 py-4">
      {/* Skills Grid */}
      <div className="grid grid-cols-4 gap-x-6 gap-y-8 md:gap-x-10 md:gap-y-10 z-10">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            skill={skill}
            onEnter={() => setHoveredSkill(skill)}
            onLeave={() => setHoveredSkill(null)}
          />
        ))}
      </div>
    </div>
  );

  const footer: ReactNode = (
    <>
      <div className="w-full flex justify-between items-end">
        {/* Link */}
        <div className="flex gap-1.5 pb-1">
          <p className="flex items-center gap-1 text-sm font-mono tracking-wide text-white opacity-70 hover:opacity-100 transition-opacity">
            Proficiency: {hoveredSkill?.prof}%
          </p>
        </div>

        {/* Role Information */}
        <div className="text-right opacity-70 hover:opacity-100 transition-opacity">
          <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#ffc1ac] mb-0.5">
            Langauge
          </p>
          <p className="text-sm font-medium tracking-wide text-white drop-shadow-md">
            {hoveredSkill?.name}
          </p>
        </div>
      </div>
    </>
  );

  return <Card title={title} body={body} footer={footer} />;
}

export default Skills;
