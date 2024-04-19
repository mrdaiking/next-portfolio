// components/Contact.tsx

import React from 'react';
import { AiFillMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

interface ContactInfo {
    email: string;
    github?: string; // Optional: Link to your GitHub profile
    linkedin?: string; // Optional: Link to your LinkedIn profile
}

interface ContactProps {
    contactInfo: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
    const test = {
        email: "youremail@example.com",
        github: "https://github.com/your-github-username",
        linkedin: "https://www.linkedin.com/in/your-linkedin-profile/",
      };
    return (
        <section className="container mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center">
                    <AiFillMail className="mr-2 text-xl text-gray-500" />
                    <a href={`mailto:${test.email}`} className="text-gray-700 hover:underline">
                        {test.email}
                    </a>
                </li>
                {test.github && (
                    <li className="flex items-center">
                        <AiFillGithub className="mr-2 text-xl text-gray-500" />
                        <a href={test.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                            GitHub Profile
                        </a>
                    </li>
                )}
                {test.linkedin && (
                    <li className="flex items-center">
                        <AiFillLinkedin className="mr-2 text-xl text-gray-500" />
                        <a href={test.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                            LinkedIn Profile
                        </a>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default Contact;
