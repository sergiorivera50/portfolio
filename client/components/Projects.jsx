import React from 'react'
import ProjectItem from './ProjectItem'
import { FiCornerRightDown } from 'react-icons/fi'
import useProjects from '../hooks/useProjects'

const Projects = () => {
  const items = 6

  const { loadingProjects, projects } = useProjects(items)

  if (!loadingProjects && projects.length < 1) {
    return (
      <p id='projects' className='text-center'>
        ❗️ No projects could be fetched from backend, please contact {' '}
        <a href='mailto: sriveralopez50@gmail.com'>
          sriveralopez50@gmail.com
        </a>
      </p>
    )
  }

  return (
    <div id='projects' className='w-full pt-[40px] px-4'>
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
            loadingProjects 
              ? [...Array(items)].map((e, ix) => (
                <ProjectItem key={ix} placeholder />
              )) 
              : projects.map((project, ix) => (
                <ProjectItem key={ix} project={project} />
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects