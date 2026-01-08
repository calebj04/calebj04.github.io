import { useState, useEffect, type ReactNode } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { skills, type SkillData } from "../../assets/skills";
import { SkillItem } from "../SkillItem";
import Card from "../Card";

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
}

function Typewriter({ text }: { text: string }) {
  const [currentText, setCurrentText] = useState(text);

  useEffect(() => {
    if (currentText === text) return;

    let commonLength = 0;
    while (
      commonLength < currentText.length &&
      commonLength < text.length &&
      currentText[commonLength] === text[commonLength]
    ) {
      commonLength++;
    }

    const isDeleting = currentText.length > commonLength;

    const typeSpeed = Math.random() * (100 - 50) + 50;
    const deleteSpeed = 30;

    const timeout = setTimeout(
      () => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return text.slice(0, prev.length + 1);
          }
        });
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, text]);

  return <span>{currentText}</span>;
}

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<SkillData | null>(null);
  const currentProf = hoveredSkill ? hoveredSkill.prof : 0;
  const currentName = hoveredSkill ? hoveredSkill.name : "Select a skill";

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
              <AnimatedNumber value={currentProf} />%
            </span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#ffc1ac] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${currentProf}%` }}
              transition={{
                type: "spring",
                mass: 0.8,
                stiffness: 75,
                damping: 15,
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
            <Typewriter text={currentName} />
            <span className="inline-block w-0.5 h-4 bg-[#ffc1ac] ml-1 align-middle animate-pulse" />
          </p>
        </div>
      </div>
    </>
  );

  return <Card title={title} body={body} footer={footer} />;
}

export default Skills;
