import { Router } from 'express'
import ProjectsController from '../controllers/projects.controller'

const projects = Router()

projects.route('/')
  .get(ProjectsController.apiGetProjects)
  .post(ProjectsController.apiAddProject)

projects.route('/id/:id')
  .put(ProjectsController.apiUpdateProject)
  .get(ProjectsController.apiGetProjectById)
  .delete(ProjectsController.apiDeleteProject)

projects.route('/featured')
  .get(ProjectsController.apiGetFeaturedProjects)

projects.route('/flush')
  .delete(ProjectsController.apiFlushProjects)

export default projects
