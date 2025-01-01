import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  const myEducation = [
    {
      year: "2023",
      course: "MERN FULL STACK ",
      university: "Luminar Technolab",
      details:
        "Completed a 6-month MERN stack web development course, gaining hands-on experience in building full-stack applications, RESTful APIs, managing MongoDB databases, and deploying projects, culminating in a certification recognizing technical expertise and contributions.",
    },
    {
      year: "2020-23",
      course: " BSc Computer Science",
      university: "Calicut university",
      details:
        "Gained expertise in computer systems, algorithms, data structures, and programming paradigms, leading a MERN stack project in the final year to demonstrate full-stack skills, teamwork, and proficiency in problem-solving and software design.",
    },
    {
      year: "2018-20",
      course: "higher secondary",
      university: "GHSS Kuzhimanna, malappuram",
      details:
        "Studied Science with a focus on Biology, Physics, Chemistry, and Mathematics, building a strong foundation in analytical thinking and problem-solving while actively participating in academic projects and extracurricular activities.",
    },
  ];

  return (
    <div className="text-white w-full flex flex-col  gap-7">
      <div className="w-full ">
        <h2 className="font-bold  md:pl-10   text-center text-white  text-2xl">
          Education
        </h2>
      </div>

      <div className=" p-1">
        <ul className="resume-box ">
          {myEducation &&
            myEducation.map((item) => (
              <EducationCard
                year={item.year}
                course={item.course}
                university={item.university}
                details={item.details}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
