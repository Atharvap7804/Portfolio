import React from 'react'
import ProjectCard from '../components/ProjectSection/ProjectCard'

const Projects = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-6 mt-24 px-4'>
      <h1 className='text-white text-xl sm:text-2xl lg:text-3xl px-5 py-2 border border-gray-500 rounded-md'>
        My Recent Works
      </h1>

      <ProjectCard />

      <div className="mt-5 flex justify-center">
        <a
          href="https://github.com/Atharvap7804"
          target='_blank'
          className='text-white px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-800 transition'
        >
          More Projects →
        </a>
      </div>
    </div>
  )
}

export default Projects
