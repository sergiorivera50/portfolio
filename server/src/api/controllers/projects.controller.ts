import { Request, Response } from 'express'
import ProjectModel from "../models/project.model"
import ExpressUtils from '../utils/express.util'
import fileUpload from 'express-fileupload'

export default class ProjectsController {
  static async apiGetProjects(req: Request, res: Response) {
    try {
      const projects = await ProjectModel.find()
      return ExpressUtils.successResponse(res, { projects: projects })
    } catch (e) {
      return ExpressUtils.errorResponse(res, "Unable to retrieve projects")
    }
  }

  static async apiGetProjectById(req: Request, res: Response) {
    const id = req.params.id

    try {
      const project = await ProjectModel.findById(id)
      return ExpressUtils.successResponse(res, { project: project })
    } catch (e) {
      return ExpressUtils.errorResponse(res, `Unable to retrieve project with id ${id}`)
    }
  }

  static async apiAddProject(req: Request, res: Response) {
    const {
      shortTitle,
      fullTitle,
      shortDescription,
      fullDescription,
      thumbnail,
      status,
      tags,
      resources,
      featured
    } = req.body

    const { data } = req.files.markdown as fileUpload.UploadedFile
    const decoded = new TextDecoder('utf-8').decode(data)

    try {
      const createdProject = await new ProjectModel({
        shortTitle: shortTitle,
        fullTitle: fullTitle,
        shortDescription: shortDescription,
        fullDescription: fullDescription,
        thumbnail: thumbnail,
        markdown: decoded,
        status: status,
        tags: tags,
        resources: resources,
        featured: featured
      }).save()
      return ExpressUtils.successResponse(res, { created: createdProject }, 201)
    } catch (e) {
      console.log(e)
      return ExpressUtils.errorResponse(res, "Unable to add project")
    }
  }

  static async apiUpdateProject(req: Request, res: Response) {
    const id = req.params.id
    const {
      shortTitle,
      fullTitle,
      shortDescription,
      fullDescription,
      thumbnail,
      markdownContent,
      status,
      tags,
      resources,
      featured
    } = req.body

    try {
      const newVersion = {
        shortTitle: shortTitle,
        fullTitle: fullTitle,
        shortDescription: shortDescription,
        fullDescription: fullDescription,
        thumbnail: thumbnail,
        markdownContent: markdownContent,
        status: status,
        tags: tags,
        resources: resources,
        featured: featured
      }
      const updatedProject = await ProjectModel.findByIdAndUpdate(id, newVersion, {returnDocument: 'after'})
      return ExpressUtils.successResponse(res, { updated: updatedProject })
    } catch (e) {
      console.log(e)
      return ExpressUtils.errorResponse(res, `Unable to udpate project with id ${id}`)
    }
  }

  static async apiDeleteProject(req: Request, res: Response) {
    const { id } = req.query

    try {
      const result = await ProjectModel.deleteOne({ _id: id })
      if (result.deletedCount === 0) return ExpressUtils.errorResponse(res, "No documents deleted")
      return ExpressUtils.successResponse(res, { deleted: { id, ...result } })
    } catch (e) {
      return ExpressUtils.errorResponse(res, e.message)
    }
  }

  static async apiFlushProjects(req: Request, res: Response) {
    try {
      const result = await ProjectModel.deleteMany({})
      return ExpressUtils.successResponse(res, { deleted: result })
    } catch (e) {
      return ExpressUtils.errorResponse(res, e.message)
    }
  }
}
