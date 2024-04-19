// components/Education.tsx

import React from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  major?: string; // Optional: Major field of study
  graduationDate?: string; // Optional: Graduation date (e.g., "Dec 2023")
  courses?: string[]; // Optional: List of relevant coursework (optional)
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
    const tests = [
        {
          institution: "University of Example",
          degree: "Bachelor of Science",
          major: "Computer Science",
          graduationDate: "May 2024",
          courses: [
            "Data Structures and Algorithms",
            "Software Engineering Principles",
            "Web Development",
            "Artificial Intelligence",
          ],
        },
        {
          institution: "Community College",
          degree: "Associate of Arts",
          major: "Mathematics",
          graduationDate: "Dec 2020",
        },
      ];
      
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tests.map((item) => (
          <li key={item.institution} className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{item.institution}</h3>
              {item.graduationDate && (
                <p className="text-gray-500 text-sm">Graduated: {item.graduationDate}</p>
              )}
            </div>
            <p className="text-gray-700">{item.degree} {item.major && `in ${item.major}`}</p>
            {item.courses && (
              <div className="mt-2">
                <h4 className="text-base font-medium mb-1">Relevant Coursework:</h4>
                <ul className="list-disc space-y-1 pl-4">
                  {item.courses.map((course) => (
                    <li key={course} className="text-gray-700">
                      {course}
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

export default Education;
