import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { ProjectsContext } from '../../context/ProjectsContext';

const ProjectCard = () => {
  const { projects } = useContext(ProjectsContext);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-2"
    >
      {projects.map((project, idx) => (
        <motion.div
          variants={item}
          key={idx}
          className="group rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/40 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-purple-950/30"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              {project.condition && (
                <span className="text-[11px] font-semibold uppercase px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {project.condition}
                </span>
              )}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-light line-clamp-4">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3 pt-6 mt-4 border-t border-slate-800/60">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2.5 px-4 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 text-slate-200 text-xs sm:text-sm font-medium transition"
            >
              GitHub Code
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-medium shadow-md shadow-purple-600/20 transition"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectCard;