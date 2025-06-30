import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  const myEducation = [
    {
      year: "2023",
      course: "MERN FULL STACK",
      university: "Luminar Technolab",
      details:
        "Completed a 6-month MERN stack web development course, gaining hands-on experience in full-stack apps, RESTful APIs, MongoDB, and deployments. Earned certification for technical contributions.",
    },
    {
      year: "2020-23",
      course: "BSc Computer Science",
      university: "Calicut University",
      details:
        "Studied algorithms, data structures, and systems. Led a MERN stack project showcasing full-stack development, teamwork, and software design proficiency.",
    },
    {
      year: "2018-20",
      course: "Higher Secondary",
      university: "GHSS Kuzhimanna, Malappuram",
      details:
        "Focused on Biology, Physics, Chemistry, and Mathematics. Developed analytical skills through academic and extracurricular involvement.",
    },
  ];

  return (
    <section
      id="education"
      className="w-full  py-12 px-4 md:px-12 text-white flex flex-col gap-10 items-center"
    >
      {/* Heading */}
      <div className="w-full text-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-wider text-white">
          Education
        </h2>
      </div>

      {/* Timeline List with Glass Cards */}
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {myEducation.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white/5 border border-white/20 
              backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <EducationCard
              year={item.year}
              course={item.course}
              university={item.university}
              details={item.details}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
