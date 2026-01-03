import { useState, type ReactNode } from "react";
import { skills, type SkillData } from "../../assets/skills";
import { SkillItem } from "../SkillItem";
import Card from "../Card";

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
        {/* Proficiency */}
        <div className="flex gap-1.5 pb-1">
          <p className="flex items-center gap-1 text-sm font-mono tracking-wide text-white opacity-70 hover:opacity-100 transition-opacity">
            Proficiency: {hoveredSkill?.prof ? hoveredSkill?.prof : "--"}%
          </p>
        </div>

        {/* Language/Library */}
        <div className="text-right opacity-70 hover:opacity-100 transition-opacity">
          <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#ffc1ac] mb-0.5">
            Langauge
          </p>
          <p className="text-sm font-medium tracking-wide text-white drop-shadow-md">
            {hoveredSkill?.name ? hoveredSkill.name : "*Hover over an icon*"}
          </p>
        </div>
      </div>
    </>
  );

  return <Card title={title} body={body} footer={footer} />;
}

export default Skills;
