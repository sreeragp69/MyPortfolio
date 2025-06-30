import React, { memo } from "react";
import ExperienceCard from "./ExperienceCard";

const myExperience = [
  {
    year: "Dec 2023 – Present",
    role: "Freelance Full Stack Developer",
    company: "Indore, Kochi",
    details:
      "Developed full-stack solutions using MERN stack for multiple clients, crafted responsive UIs, managed deployments, and followed Git-based workflows with a focus on UI/UX best practices.",
  },
  {
    year: "July 2024 – Dec 2024",
    role: "Full Stack Developer Intern",
    company: "Medlare, Indore",
    details:
      "Collaborated on scalable MERN projects, optimized RESTful APIs, contributed to frontend features in React, participated in agile sprints, testing, and deployments.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full   py-12 px-4 md:px-12 text-white flex flex-col gap-10 items-center"
      aria-labelledby="experience-heading"
    >
      {/* Section Header */}
      <header className="w-full text-center">
        <h2
          id="experience-heading"
          className="text-3xl font-extrabold tracking-wide text-white uppercase"
        >
          Experience
        </h2>
      </header>

      {/* Glass Cards Container */}
      <div className="w-full  max-w-4xl flex flex-col gap-8">
        {myExperience.map((exp, index) => (
          <div
            key={index}
            className="p-6  rounded-xl bg-white/5 border border-white/20 
              backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <ExperienceCard
              year={exp.year}
              role={exp.role}
              company={exp.company}
              details={exp.details}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Experience);
