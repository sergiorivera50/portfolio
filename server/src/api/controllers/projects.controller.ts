import { Request, Response } from 'express'
import ProjectModel from "../models/project.model"
import { errorResponse, successResponse } from '../utils/express.util'

export default class ProjectsController {
  static async apiGetProjects(req: Request, res: Response) {
    let projects = []
    try {
      projects = await ProjectModel.find()
    } catch (e) {
      return errorResponse(res, "Unable to retrieve projects")
    }
    return successResponse(res, { projects: projects })
  }

  static async apiAddProject(req: Request, res: Response) {
    const {
      title,
      frameworks,
      resources
    } = req.body

    try {
      const createdProject = await new ProjectModel({
        title: title,
        frameworks: frameworks,
        resources: resources
      }).save()
      return successResponse(res, { created: createdProject })
    } catch (e) {
      return errorResponse(res, "Unable to add project")
    }
  }

  static async apiDeleteProject(req: Request, res: Response) {
    const { id } = req.query
    try {
      const result = await ProjectModel.deleteOne({ _id: id })
      if (result.deletedCount === 0) throw new Error("No documents deleted")
      return successResponse(res, { deleted: { id, ...result } })
    } catch (e) {
      return errorResponse(res, e.message)
    }
  }
}
