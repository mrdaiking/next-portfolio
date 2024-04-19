// components/Skills.tsx

import React from 'react';

interface Skill {
  name: string;
  level: string; // Example: "Beginner", "Intermediate", "Advanced"
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    const tests = [
        { name: "Programming Languages", level: "Advanced" },
        { name: "JavaScript", level: "Expert" },
        { name: "React", level: "Proficient" },
        { name: "Node.js", level: "Intermediate" },
        { name: "HTML & CSS", level: "Advanced" },
        { name: "Databases (MySQL, PostgreSQL)", level: "Intermediate" },
        { name: "Version Control (Git)", level: "Proficient" },
        { name: "Problem Solving", level: "Advanced" },
        { name: "Teamwork & Communication", level: "Advanced" },
      ];
      

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tests.map((skill) => (
          <li key={skill.name} className="flex items-center mb-2">
            <span className="text-lg font-medium mr-4">{skill.name}</span>
            <span className="inline-block bg-gray-200 rounded px-2 py-1 text-gray-700">
              {skill.level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
