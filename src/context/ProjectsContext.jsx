import React, { createContext } from 'react'
export const ProjectsContext = createContext();

const projectsData = [
  {
    title: "ExpenseSensei 💸",
    condition: "Completed",
    description:
      "AI-powered expense tracker for managing personal finances. Features income/expense tracking, smart categorization, budget monitoring, and analytics dashboard. Built using React Native with a scalable backend.",
    githubLink: "https://github.com/Atharvap7804/ExpenseSensei.git",
    liveLink: "https://expense-sensei.vercel.app/"
  },

  {
    title: "Devportfolio and Code auditor",
    condition: "Completed",
    description:
      " Full-stack code analysis tool using MERN stack and Gemini API to scan codebases for security vulnerabilities. JWT auth and MongoDB aggregation for analysis history, reducing repeated LLM API calls. ",
    githubLink: "https://github.com/Atharvap7804/DevPortfolio-and-CodeAuditor",
    liveLink: "https://dev-portfolio-and-code-auditor.vercel.app/"
  },

  {
    title: "TicketFlow",
    condition: "Completed",
    description:
      "A full-stack support ticketing platform with real-time triage and an AI Copilot for automated issue classification and context-aware email generation.",
    githubLink: "https://github.com/Atharvap7804/TicketFlow",
    liveLink: "https://ticket-flow-kappa.vercel.app/"
  },

  {
    title: "PicPals 📸",
    condition: "Completed",
    description:
      "Social media platform for sharing photos and videos, following users, and engaging through likes and comments. Includes authentication and responsive UI.",
    githubLink: "https://github.com/Atharvap7804/CodeAlpha_PicPals"
  },

  {
    title: "ANON 🛒",
    condition: "Completed",
    description:
      "Full-stack e-commerce application with user authentication, cart and order management, coupons/discounts, and admin dashboard. Backend built with Node.js & Express and frontend with HTML, CSS, and JavaScript.",
    githubLink: "https://github.com/Atharvap7804/CodeAlpha_PicPals"
  }
];


export const ProjectsProvider=({children})=>{
  return(
  <ProjectsContext.Provider value={{projects:projectsData}}>{children}</ProjectsContext.Provider>
  )
}