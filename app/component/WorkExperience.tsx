// components/WorkExperience.tsx
'use client';
import React from 'react';

interface WorkExperienceProps {
  experiences: {
    company: string;
    title: string;
    dates: string; // Example format: "Jan 2020 - Dec 2023"
    description: string;
    technologies?: string[]; // Optional: List of technologies used
  }[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
    const  tests = [
        {
          company: "Awesome Tech Company",
          title: "Software Engineer",
          dates: "Jan 2022 - Present",
          description:
            "Developed and maintained web applications using React, Node.js, and various databases. Collaborated with designers and other developers to deliver high-quality features.",
          technologies: ["React", "Node.js", "Express", "MongoDB"],
        },
        {
          company: "Startup Inc.",
          title: "Web Development Intern",
          dates: "Jun 2021 - Dec 2021",
          description:
            "Built responsive front-end interfaces using HTML, CSS, and JavaScript. Worked on integrating third-party APIs for enhanced functionality.",
          technologies: ["HTML", "CSS", "JavaScript", "APIs"],
        },
      ];
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      <ul className="space-y-8">
        {tests.map((experience) => (
          <li key={experience.company}>
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold mr-4">{experience.company}</h3>
              <span className="text-gray-500">{experience.dates}</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <h4 className="text-lg font-medium mb-2 md:mb-0 mr-4 md:mr-0">
                {experience.title}
              </h4>
              <span className="text-gray-500 text-sm md:text-base">{experience.dates}</span>
            </div>
            <p className="text-gray-700">{experience.description}</p>
            {experience.technologies && (
              <div className="flex items-center mt-2">
                <span className="text-gray-500 text-sm mr-2">Technologies:</span>
                <ul className="flex flex-wrap space-x-2">
                  {experience.technologies.map((tech) => (
                    <li key={tech} className="text-gray-700 bg-gray-200 rounded px-2 py-1">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
