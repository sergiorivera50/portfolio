import React from 'react'
import api from '../../services/project'
import { BACKEND_URL } from '../../http'
import ProjectDetail from '../../components/ProjectDetail'

export async function getServerSideProps({ params }) {
  const { data } = await api.getProjectById(params.id)
  const { project } = data

  project.thumbnail = `${BACKEND_URL}/static/${project._id}.png`

  return {
    props: { project }
  }
}

const Project = ({ project }) => {
  return (
    <ProjectDetail project={project} />
  )
}

export default Project
