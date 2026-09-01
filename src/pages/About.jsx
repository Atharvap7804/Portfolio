import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 py-12">
      {/* Left — Lottie */}
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/ac20c1f4-4240-49cf-a808-cc095fb7a0c3/Ft16466IdA.lottie"
          loop
          autoplay
          className="w-full max-w-[420px] drop-shadow-[0_0_35px_rgba(168,85,247,0.15)]"
        />
      </div>

      {/* Right — Glass Card */}
      <div className="md:w-1/2 w-full rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-8 md:p-10 shadow-xl space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-slate-300 leading-relaxed">
          I’m Atharva, a final-year Computer Science student and a passionate Full Stack MERN Developer building practical, production-ready web applications.
        </p>

        <p className="text-slate-300 leading-relaxed">
          I’ve developed end-to-end applications handling authentication, state management, REST APIs, and database performance, prioritizing readable and scalable architecture.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {[
            '🚀 JavaScript, React, Node.js',
            '🧠 MongoDB, Firebase & REST',
            '🛠️ Scalable Full-Stack Apps',
            '🎯 Open for Internship Roles',
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm font-medium text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;