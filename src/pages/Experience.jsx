import React, { useContext } from "react";
import { ExperienceContext } from "../context/ExperienceContext";
import { motion } from "framer-motion";

const Experience = () => {
  const { experience } = useContext(ExperienceContext);

  return (
    <div id="experience" className="flex flex-col items-center mt-20 gap-6">

      <h1 className="text-white text-lg sm:text-xl lg:text-3xl px-4 py-2 border border-gray-500 rounded-md">
        Experience
      </h1>

      <div className="w-[90vw] max-w-5xl flex flex-col gap-6">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg shadow-lg bg-[#0b1120] text-white hover:bg-violet-700 duration-300"
          >
            <h2 className="text-2xl font-semibold">{exp.role}</h2>
            <p className="text-violet-400">{exp.company}</p>

            <div className="text-sm text-gray-400 mt-1">
              {exp.duration} • {exp.type}
            </div>

            <p className="mt-3 text-gray-300">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
