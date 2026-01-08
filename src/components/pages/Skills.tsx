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
      <div className="grid grid-cols-4 gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-10 z-10">
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
        <div className="flex flex-col justify-end w-1/2 pr-4">
          <div className="flex justify-between items-end mb-1.5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#ffc1ac] opacity-80">
              Proficiency
            </span>
            <span className="text-sm font-mono text-white opacity-90 tabular-nums text-right">
              {hoveredSkill?.prof}%
            </span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ffc1ac] rounded-full"
              style={{
                width: `${hoveredSkill ? hoveredSkill.prof : 0}%`,
              }}
            />
          </div>
        </div>

        {/* Technology Name */}
        <div className="flex flex-col items-end justify-end w-1/2">
          <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#ffc1ac] opacity-80 mb-0.5">
            Technology
          </p>
          <p className="text-sm font-medium tracking-wide text-white drop-shadow-md text-right">
            {hoveredSkill?.name}
            <span className="inline-block w-0.5 h-4 bg-[#ffc1ac] ml-1 align-middle animate-pulse" />
          </p>
        </div>
      </div>
    </>
  );

  return <Card title={title} body={body} footer={footer} />;
}

export default Skills;
