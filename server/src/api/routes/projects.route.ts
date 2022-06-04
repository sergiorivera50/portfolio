import { Router } from 'express'
import ProjectsController from '../controllers/projects.controller'

const projects = Router()

projects.route('/').get(ProjectsController.apiGetProjects)

export default projects
