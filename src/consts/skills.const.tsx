import { FaNodeJs } from "react-icons/fa6";
import {
  SiBootstrap,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPhp,
  SiPostman,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    gradient: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DBFB" },
      { name: "Redux", Icon: SiRedux, color: "#011627" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F0DB4F" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Shadcn UI", Icon: SiShadcnui, color: "red" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#8312FA" },
    ],
  },
  {
    title: "Backend",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", Icon: FaNodeJs, color: "#68A063" },
      { name: "Express.js", Icon: SiExpress, color: "#0075C9" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F0DB4F" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "PHP", Icon: SiPhp, color: "#7478AF" },
    ],
  },
  {
    title: "Database",
    gradient: "from-green-400 to-emerald-500",
    skills: [
      { name: "MongoDB", Icon: SiMongodb, color: "#006548" },
      { name: "MySQL", Icon: SiMysql, color: "#F29418" },
    ],
  },
  {
    title: "Tools",
    gradient: "from-orange-400 to-yellow-500",
    skills: [
      { name: "Git", Icon: SiGit, color: "#DF523C" },
      { name: "Github", Icon: SiGithub, color: "#22262A" },
      { name: "JWT", Icon: SiJsonwebtokens, color: "#F5085C" },
      { name: "Mongoose", Icon: SiMongoose, color: "#8C0808" },
      { name: "Zod", Icon: SiZod, color: "#468FFE" },
      { name: "Postman", Icon: SiPostman, color: "#FF713D" },
    ],
  },
  {
    title: "Soft Skills",
    gradient: "from-pink-400 to-rose-500",
    skills: [
      { name: "Problem Solving", Icon: null, color: "" },
      { name: "Teamwork", Icon: null, color: "" },
      { name: "Communication", Icon: null, color: "" },
      { name: "Time Management", Icon: null, color: "" },
    ],
  },
];
