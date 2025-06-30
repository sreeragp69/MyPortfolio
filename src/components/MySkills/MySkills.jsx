import SkillCard from "./SkillCard";
import { RiReactjsFill } from "react-icons/ri";
import { SiRedux, SiThreedotjs,SiAdobexd ,SiMui,SiJquery,SiGoogleanalytics    } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import { MdErrorOutline } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import { PiFileSqlLight } from "react-icons/pi";
import { FiFramer } from "react-icons/fi";
import { RiDatabaseFill } from "react-icons/ri";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";


import { RiTailwindCssFill } from "react-icons/ri";

import {
  SiDaisyui,
  SiExpress,
  SiJest,
  SiJsonwebtokens,
  SiMongoose,
  SiNetlify,
  SiRender,
  SiShadcnui,
  SiTestinglibrary,
} from "react-icons/si";

import { BiError } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";





const MySkills = () => {
  const FrontendSkill = [
    {
      icon: FaHtml5,
      nameOFIcon: "HTML5",
    },
    {
      icon: FaCss3Alt,
      nameOFIcon: "CSS3",
    },
    {
      icon: FaJsSquare,
      nameOFIcon: "JavaScript ES6+",
    },
     {
      icon: RiReactjsFill,
      nameOFIcon: "React Js",
    },
     {
      icon: SiRedux,
      nameOFIcon: "Redux",
    },
    {
      icon: RiTailwindCssFill,
      nameOFIcon: "TailwindCSS",
    },
    {
      icon: SiThreedotjs,
      nameOFIcon: "Three.js",
    },
    {
      icon: MdErrorOutline,
      nameOFIcon: "GSAP",
    },
    {
      icon: FaFigma,
      nameOFIcon: "Figma",
    },
    {
      icon: SiAdobexd ,
      nameOFIcon: "Adobe XD",
    },
    {
      icon: FiFramer,
      nameOFIcon: "Framer Motion",
    },
    {
      icon: FaBootstrap,
      nameOFIcon: "Bootstrap",
    },
    {
      icon: SiMui ,
      nameOFIcon: "Material UI",
    },
    {
      icon: SiShadcnui,
      nameOFIcon: "Shadcn UI",
    },
    {
      icon: SiDaisyui,
      nameOFIcon: "Daisy UI",
    },
  ];

  const backendSkill = [
    {
      icon: FaNodeJs,
      nameOFIcon: "NodeJs",
    },
    {
      icon: SiExpress,
      nameOFIcon: "Express Js",
    },
    {
      icon: SiJquery ,
      nameOFIcon: "jQuery",
    },
    {
      icon: AiOutlineCloudServer,
      nameOFIcon: "RESTful APIs",
    },
    {
      icon: SiJsonwebtokens,
      nameOFIcon: "Jsonwebtokens",
    },
  ];

  const DatabaseSkill = [
    {
      icon: DiMongodb,
      nameOFIcon: "Mongodb",
    },
    {
      icon: PiFileSqlLight ,
      nameOFIcon: "MySQL",
    },
    {
      icon: DiMongodb,
      nameOFIcon: "SQL",
    },
    {
      icon: RiDatabaseFill,
      nameOFIcon: "Relational Databases",
    },
    {
      icon: SiMongoose,
      nameOFIcon: "Mongoose",
    },
    {
      icon: FaDatabase,
      nameOFIcon: "Database Design & Optimization",
    },
  ];

  const toolSkill = [
    {
      icon: FaGitAlt,
      nameOFIcon: "Git",
    },
    {
      icon: FaGithub,
      nameOFIcon: "Github",
    },
    {
      icon: SiGoogleanalytics ,
      nameOFIcon: "Power BI",
    },
    {
      icon: SiNetlify,
      nameOFIcon: "Netlify",
    },
   
    {
      icon: SiRender,
      nameOFIcon: "Render",
    },
  ];

  const testingSkill = [
    {
      icon: SiJest,
      nameOFIcon: "Jest",
    },
    {
      icon: SiTestinglibrary,
      nameOFIcon: "React testing library",
    },
  ];

  return (
  <section className="w-full py-12 px-4 md:px-12 text-white flex flex-col gap-10">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-wider text-white">
          My Skills
        </h2>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-col gap-12">
        {/* Render Skill Blocks */}
        {[
          { title: "Frontend", data: FrontendSkill },
          { title: "Backend", data: backendSkill },
          { title: "Database", data: DatabaseSkill },
          { title: "Tools", data: toolSkill },
          { title: "Testing", data: testingSkill },
        ].map((section) => (
          <div key={section.title}>
            <h3 className="text-xl font-semibold mb-3 text-white/90">{section.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:flex xl:flex-wrap gap-4">
              {section.data.map((item) => (
                <SkillCard
                  key={item.nameOFIcon}
                  techName={item.nameOFIcon}
                  iconName={item.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
