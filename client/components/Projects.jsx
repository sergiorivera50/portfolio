import React from 'react'
import ProjectItem from './ProjectItem'
import { FiCornerRightDown } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { BACKEND_URL } from '../http'
import api from '../services/project'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loadingProjects, setLoadingProjects] = useState(true)

  const fetchProjects = async () => {
    const { data } = await api.getFeaturedProjects(6)
    const { projects } = data

    projects.map(
      project => project.thumbnail = `${BACKEND_URL}/static/${project._id}.png`
    )

    return projects
  }

  useEffect(() => {
    setLoadingProjects(true)
    fetchProjects()
      .then(projects => {
        setProjects(projects)
        //setLoadingProjects(false)
      })
  }, [])

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
            loadingProjects 
                ? [...Array(6)].map((e, ix) => (
                    <div className='relative flex h-80 w-full bg-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-[98%] ease-in duration-200' key={ix} />
                ))
                : projects.map((project, ix) => (
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