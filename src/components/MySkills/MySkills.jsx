import SkillCard from "./SkillCard";

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
      nameOFIcon: "HTML",
    },
    {
      icon: FaCss3Alt,
      nameOFIcon: "CSS",
    },
    {
      icon: FaJsSquare,
      nameOFIcon: "JavaScript",
    },
    {
      icon: RiTailwindCssFill,
      nameOFIcon: "TailwindCss",
    },
    {
      icon: FaBootstrap,
      nameOFIcon: "Bootstrap",
    },
    {
      icon: BiError,
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
      icon: BiError,
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
    <div className="text-white w-full flex flex-col  gap-7">
      <div className="w-full ">
        <h2 className="font-bold   text-center text-white  text-2xl">
          PERSONAL INFOS
        </h2>
      </div>

      <div className=" flex flex-col gap-10 border-gray p-3 ">
        <div>
          <h1 className=" mb-2">Frontend</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:flex xl:flex-wrap  gap-4">
            {FrontendSkill &&
              FrontendSkill.map((item) => (
                <div key={item.nameOFIcon}>
                  <SkillCard  techName={item.nameOFIcon} iconName={item.icon} />
                </div>
              ))}
          </div>
        </div>

        <div>
          <h1 className=" mb-2">Backend</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:flex xl:flex-wrap  gap-4">
            {backendSkill &&
              backendSkill.map((item) => (
                <div key={item.nameOFIcon}>
                  <SkillCard techName={item.nameOFIcon} iconName={item.icon} />
                </div>
              ))}
          </div>
        </div>

        <div>
          <h1 className=" mb-2">Database</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:flex xl:flex-wrap  gap-4">
            {DatabaseSkill &&
              DatabaseSkill.map((item) => (
                <div key={item.nameOFIcon}>
                  <SkillCard techName={item.nameOFIcon} iconName={item.icon} />
                </div>
              ))}
          </div>
        </div>

        <div>
          <h1 className=" mb-2">Tools</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4">
            {toolSkill &&
              toolSkill.map((item) => (
                <div key={item.nameOFIcon}>
                  <SkillCard techName={item.nameOFIcon} iconName={item.icon} />
                </div>
              ))}
          </div>
        </div>

        <div>
          <h1 className=" mb-2">Testing</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4">
            {testingSkill &&
              testingSkill.map((item) => (
                <div key={item.nameOFIcon}>
                  <SkillCard techName={item.nameOFIcon} iconName={item.icon} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
