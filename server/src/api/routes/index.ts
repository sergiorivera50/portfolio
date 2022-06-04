import { Router } from 'express'
import projects from './projects.route'

const routes = Router()

routes.use('/projects', projects)

export default routes
