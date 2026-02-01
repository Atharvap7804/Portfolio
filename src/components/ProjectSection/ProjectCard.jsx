import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { ProjectsContext } from '../../context/ProjectsContext'

const ProjectCard = () => {
  const { projects } = useContext(ProjectsContext)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90vw] mt-6"
    >
      {projects.map((project, idx) => (
        <motion.div
          variants={item}
          key={idx}
          className="p-5 rounded-xl flex flex-col text-white h-full shadow-lg bg-[#0b1120] hover:bg-violet-700 transition duration-300"
        >
          <h1 className="text-xl font-semibold mb-1">
            {project.title}
          </h1>

          <p className="text-sm text-gray-400 mb-2">
            {project.condition}
          </p>

          <p className="text-gray-300 flex-grow">
            {project.description}
          </p>

          <div className="flex justify-center mt-5">
            <a
              href={project.githubLink}
              target="_blank"
              className="bg-[#060b16] px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
            >
              View on GitHub
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProjectCard
