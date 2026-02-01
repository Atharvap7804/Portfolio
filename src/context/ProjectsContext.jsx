import React, { createContext } from 'react'
export const ProjectsContext = createContext();

const projectsData = [
  {
    title: "ExpenseSensei 💸",
    condition: "In Progress",
    description:
      "AI-powered expense tracker for managing personal finances. Features income/expense tracking, smart categorization, budget monitoring, and analytics dashboard. Built using React Native with a scalable backend.",
    githubLink: "unavailable yet"
  },

  {
    title: "TaskMaster 📝",
    condition: "Completed",
    description:
      "Task management web application with authentication, role-based dashboards, and real-time task tracking. Enables admins to assign tasks and employees to manage progress efficiently.",
    githubLink: "https://github.com/Atharvap7804/TaskMaster"
  },

  {
    title: "Drive 🗂️",
    condition: "Completed",
    description:
      "Cloud-based file storage system with secure authentication and file uploads. Integrated Multer and Cloudinary for storage, JWT authentication, and MongoDB for data persistence.",
    githubLink: "https://github.com/Atharvap7804/Drive"
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