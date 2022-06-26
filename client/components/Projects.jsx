import React from 'react'
import githubCloneImg from '../public/assets/projects/project.png'
import ProjectItem from './ProjectItem'

const Projects = ({ projects }) => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I have built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {
            projects.map((project, ix) => (
              <ProjectItem 
                key={ix}
                title={project.title} 
                description={project.description} 
                bgImg={githubCloneImg} 
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