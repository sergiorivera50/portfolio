import React from 'react'
import ProjectItem from './ProjectItem'
import { FiCornerRightDown } from 'react-icons/fi'

const Projects = ({ projects }) => {
  return (
    <div id='projects' className='w-full pt-[40px]'>
      <div className='max-w-[1240px] mx-auto px-2'>  {/* Add py-16 if using Navbar */}
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <div className='flex justify-between items-center'>
          <h2 className='py-2'>What I have built</h2>
          <div className='flex justify-end pt-6'>
            <p className='text-gray-500 mr-2'>hover over to see more</p>
            <FiCornerRightDown className='mt-2' color='gray'/>
          </div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {
            projects.map((project, ix) => (
              <ProjectItem 
                key={ix}
                title={project.title} 
                description={project.description} 
                imgSrc={project.thumbnail} 
                projectPath={`/projects/${project._id}`} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects