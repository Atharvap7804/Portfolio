import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const skills = [
  { icon: 'html5-plain colored', label: 'HTML5' },
  { icon: 'css3-plain colored', label: 'CSS3' },
  { icon: 'tailwindcss-original colored', label: 'Tailwind' },
  { icon: 'javascript-plain colored', label: 'JavaScript' },
  { icon: 'python-plain colored', label: 'Python' },
  { icon: 'react-original colored', label: 'React' },
  { icon: 'nodejs-plain colored', label: 'Node.js' },
  { icon: 'express-original', label: 'Express' },
  { icon: 'reactnative-original colored', label: 'React Native' },
  { icon: 'mongodb-plain colored', label: 'MongoDB' },
  { icon: 'git-plain colored', label: 'Git' },
  { icon: 'github-original text-white', label: 'GitHub' },
  { icon: 'firebase-plain colored', label: 'Firebase' },
  { icon: 'amazonwebservices-plain-wordmark colored', label: 'AWS' },
];

const Skills = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-12 py-12">
      <div className="md:w-1/2 w-full space-y-6">
        <div>
          <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">What I Do</h2>
          <p className="text-slate-300 mt-3 leading-relaxed">
            I build responsive interfaces and clean backend APIs with an emphasis on performance and developer experience.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-3 pt-4">
          {skills.map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-purple-500/40 hover:bg-purple-950/20 transition-all duration-200 group"
            >
              <span className={`devicon-${icon} text-3xl group-hover:scale-110 transition-transform duration-200`} />
              <span className="text-xs text-slate-300 font-medium mt-2">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 w-full flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/9b45073f-31b4-45e1-ab08-0c4cfeb35d11/rB9UNeutKU.lottie"
          loop
          autoplay
          className="w-full max-w-[450px]"
        />
      </div>
    </div>
  );
};

export default Skills;