import React, { useContext } from "react";
import { ExperienceContext } from "../context/ExperienceContext";
import { motion } from "framer-motion";

const Experience = () => {
  const { experience } = useContext(ExperienceContext);

  return (
    <div className="flex flex-col items-center gap-10 py-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        <p className="text-slate-400 text-sm">Professional roles and contributions</p>
      </div>

      <div className="w-full max-w-4xl space-y-4">
        {experience?.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/50 hover:bg-slate-900/80 backdrop-blur-md transition-all duration-300 shadow-lg group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                {exp.role}
              </h3>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 w-fit">
                {exp.duration} • {exp.type}
              </span>
            </div>
            <p className="text-purple-400 text-sm font-medium mt-1">{exp.company}</p>
            <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;