import { useState } from "react";
import { type SkillData } from "../assets/skills";

export const SkillItem = ({
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
        ${isAnimating ? skill.animation : ""} 
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
