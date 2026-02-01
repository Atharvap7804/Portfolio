import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const skills = [
  { icon: 'html5-plain colored', label: 'HTML5' },
  { icon: 'css3-plain colored', label: 'CSS3' },
  { icon: 'tailwindcss-original colored', label: 'Tailwind' },
  { icon: 'javascript-plain colored', label: 'JavaScript' },
  { icon: 'python-plain colored', label: 'Python' },
  { icon: 'react-original colored', label: 'React' },
  { icon: 'nodejs-plain colored', label: 'Node.js' },

  // ❗ FIXED ONES
  { icon: 'express-original', label: 'Express' },
  { icon: 'reactnative-original colored', label: 'React Native' },

  { icon: 'mongodb-plain colored', label: 'MongoDB' },
  { icon: 'git-plain colored', label: 'Git' },
  { icon: 'github-original text-white', label: 'GitHub' },
  { icon: 'npm-original-wordmark colored', label: 'NPM' },
  { icon: 'firebase-plain colored', label: 'Firebase' },
  { icon: 'amazonwebservices-plain colored', label: 'AWS' },
]

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen p-5 md:p-10">

     
      {/* RIGHT — CONTENT */}
      <div className="md:w-1/2 w-full text-white mt-10 md:mt-0">

        {/* TEXT */}
        <div className="flex flex-col gap-4 md:gap-5 md:pl-9 text-center md:text-left shadow-lg
       drop-shadow-gray-950 p-8 ">
          <h1 className="text-3xl md:text-5xl font-semibold p-3 md:p-0 rounded-md inline-block">
            What I do ?
          </h1>

          <p className="text-xl md:text-3xl">
            Full Stack MERN Developer | Building Real-World Web Applications
          </p>

          <p className="skill-info text-base md:text-xl text-gray-300">
            I design and develop scalable, user-friendly web applications with a strong
            focus on performance, clean architecture, and real-world problem solving.
            I enjoy working across the full stack — from crafting responsive UIs to
            building secure backend APIs.
          </p>
        </div>

        {/* TECH STACK */}
        <div>
          <h1 className="md:pl-9 mt-8 md:mt-10 text-lg md:text-xl text-center md:text-left p-3 border border-gray-500 rounded-md">
            TECH STACK
          </h1>

          <div className="mt-6 md:mt-5">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-5">

              {skills.map(({ icon, label }) => (
                <div
                  key={label}
                  className="w-[28%] sm:w-[20%] md:w-[8vw] flex flex-col items-center"
                >
                  <span
                    className={`devicon-${icon} text-4xl md:text-7xl`}
                  ></span>
                  <span className="text-sm md:text-base mt-1">
                    {label}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>

       {/* LEFT — LOTTIE */}
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/9b45073f-31b4-45e1-ab08-0c4cfeb35d11/rB9UNeutKU.lottie"
          loop
          autoplay
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
        />
      </div>

    </div>
  )
}

export default Skills
