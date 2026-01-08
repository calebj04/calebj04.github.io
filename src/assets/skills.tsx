import { type IconType } from "react-icons";
import { SiJavascript, SiC } from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaRProject,
} from "react-icons/fa";

export interface SkillData {
  Icon: IconType;
  color: string;
  name: string;
  prof: number;
  animation: string;
}

export const skills: SkillData[] = [
  {
    Icon: FaReact,
    color: "#61DAFB",
    name: "React",
    prof: 87,
    animation: "animate-spin-once",
  },
  {
    Icon: SiJavascript,
    color: "#F7DF1E",
    name: "JavaScript",
    prof: 86,
    animation: "animate-jello",
  },
  {
    Icon: FaHtml5,
    color: "#E34F26",
    name: "HTML",
    prof: 91,
    animation: "animate-flip-x-left",
  },
  {
    Icon: FaCss3Alt,
    color: "#1572B6",
    name: "CSS",
    prof: 92,
    animation: "animate-flip-x-right",
  },
  {
    Icon: FaPython,
    color: "#3776AB",
    name: "Python",
    prof: 94,
    animation: "animate-wiggle",
  },
  {
    Icon: FaJava,
    color: "#f89820",
    name: "Java",
    prof: 84,
    animation: "animate-pour",
  },
  {
    Icon: SiC,
    color: "#A8B9CC",
    name: "C",
    prof: 73,
    animation: "animate-shrink",
  },
  {
    Icon: FaRProject,
    color: "#276DC3",
    name: "R",
    prof: 64,
    animation: "animate-expand",
  },
];
