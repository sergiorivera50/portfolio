import { useState, useEffect } from 'react'
import { BACKEND_URL } from '../http'
import api from '../services/project'

export default function useProjects(items = 6) {
  const [projects, setProjects] = useState([])
  const [loadingProjects, setLoadingProjects] = useState(true)

  const fetchProjects = async () => {
    const { data } = await api.getFeaturedProjects(items)
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
        setLoadingProjects(false)
      })
  }, [])

  return { loadingProjects, projects }
}