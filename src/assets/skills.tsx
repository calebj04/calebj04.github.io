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
  prof: string;
}

export const skills: SkillData[] = [
  { Icon: FaReact, color: "#61DAFB", name: "React", prof: "87" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript", prof: "86" },
  { Icon: FaHtml5, color: "#E34F26", name: "HTML", prof: "91" },
  { Icon: FaCss3Alt, color: "#1572B6", name: "CSS", prof: "92" },
  { Icon: FaPython, color: "#3776AB", name: "Python", prof: "94" },
  { Icon: FaJava, color: "#f89820", name: "Java", prof: "84" },
  { Icon: SiC, color: "#A8B9CC", name: "C", prof: "73" },
  { Icon: FaRProject, color: "#276DC3", name: "R", prof: "64" },
];
