import React from 'react';
import ProjectCard from '../components/ProjectSection/ProjectCard';

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-12">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">
          Portfolio
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Recent{" "}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
            Works
          </span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
          A showcase of full-stack applications, interactive user interfaces, and backend systems.
        </p>
      </div>

      {/* Projects Grid/Cards Container */}
      <div className="w-full">
        <ProjectCard />
      </div>

      {/* View More Button */}
      <div className="mt-6 flex justify-center">
        <a
          href="https://github.com/Atharvap7804"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 text-slate-200 font-medium transition-all duration-200 backdrop-blur-md shadow-lg shadow-purple-950/20 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>More Projects</span>
          <i className="devicon-github-original text-lg text-slate-400 group-hover:text-white transition-colors" />
          <span className="text-purple-400 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;