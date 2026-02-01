import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 py-16 gap-10 text-white"
    >
      {/* Left — LOTTIE */}
      <div className="md:w-1/2 w-full flex justify-center items-center mt-20 md:mt-0">
        <DotLottieReact
          src="https://lottie.host/ac20c1f4-4240-49cf-a808-cc095fb7a0c3/Ft16466IdA.lottie"
          loop
          autoplay
          className=" md:w-[450px] md:h-[450px]"
        />
      </div>
      {/* Right — TEXT */}
      <div className="md:w-1/2 w-full flex flex-col gap-6 text-center md:text-left p-10  shadow-lg
       drop-shadow-gray-950 ">
        <h2 className="text-6xl md:text-5xl font-bold">
          About Me
        </h2>

        <p className="text-base md:text-lg sm:text-left text-gray-300">
          I’m Atharva, a final-year Computer Science student and a passionate
          Full Stack MERN Developer. I enjoy building real-world web applications
          that solve practical problems and provide smooth user experiences.
        </p>

        <p className="text-base md:text-lg text-gray-300">
          I’ve worked on multiple full-stack projects involving authentication,
          dashboards, APIs, and databases. I like writing clean, maintainable
          code and continuously improving my skills by building and refining
          projects.
        </p>

        <ul className="flex flex-col gap-3 text-base md:text-lg">
          <li>🚀 Strong foundation in JavaScript, React, Node.js, Express</li>
          <li>🧠 Hands-on experience with MongoDB, Firebase & REST APIs</li>
          <li>🛠️ Built real-world apps like Task Manager, E-commerce & Social Media</li>
          <li>🎯 Looking for Internship / Entry-level Full Stack roles</li>
        </ul>
      </div>

      
    </section>
  )
}

export default About
