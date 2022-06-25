import React from 'react'
import api from '../../services/project'

export async function getServerSideProps({ params }) {
  const { data } = await api.getProjectById(params.id)
  const { project } = data

  return {
    props: { project }
  }
}

const Project = ({ project }) => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        {project.shortTitle}
      </div>
    </div>
  )
}

export default Project
