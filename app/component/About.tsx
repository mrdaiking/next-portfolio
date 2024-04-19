// components/About.tsx

import React from 'react';
import Image from 'next/image';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 px-4">
      <div className="flex flex-col justify-center items-start md:items-center">
        {/* Avatar Image */}
        <Image
          src="/avatar.png" // Replace with your avatar image path
          alt="Your Avatar"
          width={150}
          height={150}
          className="rounded-full mb-4 md:mb-0"
        />
        {/* About Me Content */}
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Write a compelling introduction about yourself, your experience, 
          and your goals. Highlight your strengths and passions.
        </p>
      </div>
      <div className="hidden md:block">
        {/* Favorite Quotes Section */}
        <h3 className="text-xl font-bold mb-4">Favorite Quotes</h3>
        <ul className="space-y-4">
          <li className="text-gray-700">"Quote 1"</li>
          <li className="text-gray-700">"Quote 2"</li>
          <li className="text-gray-700">"Quote 3"</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
