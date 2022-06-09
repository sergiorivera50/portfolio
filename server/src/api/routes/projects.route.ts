import { Router } from 'express'
import ProjectsController from '../controllers/projects.controller'

const projects = Router()

projects.route('/')
  .get(ProjectsController.apiGetProjects)
  .post(ProjectsController.apiAddProject)
  .delete(ProjectsController.apiDeleteProject)

projects.route('/flush')
  .delete(ProjectsController.apiFlushProjects)

export default projects
