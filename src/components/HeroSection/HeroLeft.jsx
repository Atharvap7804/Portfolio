import { motion } from "framer-motion";

const HeroLeft = () => {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-6 text-center lg:text-left lg:w-1/2"
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs md:text-sm font-medium w-fit mx-auto lg:mx-0 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Available for new opportunities
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
        Hi all 👋 I'm{" "}
        <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
          Atharva
        </span>
      </h1>

      <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
        Full Stack MERN Developer specializing in building fast, reliable, and user-centric web applications with clean frontend design and secure backend architecture.
      </p>

      {/* Action Buttons & Socials */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-purple-600/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Contact Me
        </a>
        <a
          href="/resume.html"
          className="px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium transition-all duration-200 backdrop-blur-md hover:-translate-y-0.5"
        >
          View Resume
        </a>

        <div className="flex items-center gap-3 pl-2">
          <a
            href="https://github.com/Atharvap7804"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 text-slate-400 hover:text-white transition-all duration-200"
          >
            <i className="devicon-github-original text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/atharva-pawar-0a58ba252"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 transition-all duration-200"
          >
            <i className="devicon-linkedin-plain text-xl" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroLeft;