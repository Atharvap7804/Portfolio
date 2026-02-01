import React, { createContext } from "react";

export const ExperienceContext = createContext();

const experienceData = [
  {
    role: "Full Stack Development Intern",
    company: "Code Alpha",
    duration: "June 2025 – July 2025",
    type: "Remote",
    description:
      "Worked on building full-stack web applications using the MERN stack. Developed a social media platform (PicPals) and an e-commerce website (ANON), implementing authentication, database integration, and responsive UI components."
  }
];

export const ExperienceProvider = ({ children }) => {
  return (
    <ExperienceContext.Provider value={{ experience: experienceData }}>
      {children}
    </ExperienceContext.Provider>
  );
};
