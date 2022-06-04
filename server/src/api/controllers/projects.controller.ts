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
    const newProject = new ProjectModel({
      title: req.body.title,
      frameworks: req.body.frameworks
    })
    await newProject.save()
    return successResponse(res, { created: newProject })
  }

  static async apiDeleteProject(req: Request, res: Response) {
    const id = req.query.id
    try {
      const result = await ProjectModel.deleteOne({ _id: id })
      if (result.deletedCount === 0) throw new Error("No documents deleted")
    } catch (e) {
      return errorResponse(res, e.message)
    }
    return successResponse(res, { deleted: id })
  }
}
