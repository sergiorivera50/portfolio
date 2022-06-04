import { Router } from 'express'
import ProjectsController from '../controllers/projects.controller'

const projects = Router()

projects.route('/')
  .get(ProjectsController.apiGetProjects)
  .post(ProjectsController.apiAddProject)
  .delete(ProjectsController.apiDeleteProject)

export default projects
