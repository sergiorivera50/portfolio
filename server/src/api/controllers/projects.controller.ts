import { Request, Response } from 'express'
import ProjectsDAO from '../../dao/projects.dao'
import ProjectModel from "../models/project.model"
import { errorResponse, successResponse } from '../utils/express.util'

export default class ProjectsController {
  static async apiGetProjects(req: Request, res: Response) {
    let projects = []
    try {
      projects = await ProjectsDAO.getProjects()
    } catch (e) {
      return errorResponse(res, "Unable to retrieve projects")
    }
    return successResponse(res, { projects: projects })
  }

  static async apiAddProject(req: Request, res: Response) {
    let newProject: typeof ProjectModel
    try {
      newProject = await ProjectsDAO.addProject(req.body.title, req.body.frameworks, req.body.resources)
    } catch (e) {
      return errorResponse(res, "Unable to add project")
    }
    return successResponse(res, { created: newProject })
  }

  static async apiDeleteProject(req: Request, res: Response) {
    const id = req.query.id
    try {
      await ProjectsDAO.deleteProject(id)
    } catch (e) {
      return errorResponse(res, e.message)
    }
    return successResponse(res, { deleted: id })
  }
}
