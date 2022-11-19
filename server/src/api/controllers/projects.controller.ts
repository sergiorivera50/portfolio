import { Request, Response } from 'express'
import ProjectModel from "../models/project.model"
import ExpressUtils from '../utils/express.util'
import fileUpload from 'express-fileupload'
import fs from 'fs'
import path from 'path'
import { logger } from '../utils/logger.util'
import AWSUtils from '../utils/aws.util'

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
    const metadataFile =  req.files.metadata as fileUpload.UploadedFile
    const {
      title,
      description,
      technologies,
      featured
    } = JSON.parse(metadataFile.data.toString())

    const markdownFile = req.files.markdown as fileUpload.UploadedFile
    const markdown = new TextDecoder('utf-8').decode(markdownFile.data)

    const thumbnailFile = req.files.thumbnail as fileUpload.UploadedFile
    const thumbnail = Buffer.from(thumbnailFile.data.buffer)
    
    try {
      const createdProject = await new ProjectModel({
        title: title,
        description: description,
        markdown: markdown,
        technologies: technologies,
        featured: featured
      }).save()

      const url = await AWSUtils.uploadFileToS3(`${createdProject._id}.png`, 'image/png', thumbnail)
      logger.info(`Created project ${createdProject._id} with thumbnail at ${url}`)
      return ExpressUtils.successResponse(res, { created: createdProject }, 201)
    } catch (e) {
      logger.error(e)
      return ExpressUtils.errorResponse(res, "Unable to add project")
    }
  }

  static async apiUpdateProject(req: Request, res: Response) {
    const id = req.params.id

    const metadataFile =  req.files.metadata as fileUpload.UploadedFile
    const {
      title,
      description,
      technologies,
      featured
    } = JSON.parse(metadataFile.data.toString())

    const markdownFile = req.files.markdown as fileUpload.UploadedFile
    const markdown = new TextDecoder('utf-8').decode(markdownFile.data)

    try {
      const newVersion = {
        title: title,
        description: description,
        markdown: markdown,
        technologies: technologies,
        featured: featured
      }
      const updatedProject = await ProjectModel.findByIdAndUpdate(id, newVersion, {returnDocument: 'after'})
      return ExpressUtils.successResponse(res, { updated: updatedProject })
    } catch (e) {
      logger.error(e)
      return ExpressUtils.errorResponse(res, `Unable to udpate project with id ${id}`)
    }
  }

  static async apiDeleteProject(req: Request, res: Response) {
    const { id } = req.params

    try {
      const result = await ProjectModel.deleteOne({ _id: id })
      if (result.deletedCount === 0) return ExpressUtils.errorResponse(res, "No documents deleted")
      await AWSUtils.deleteFileFromS3(`${id}.png`)
      return ExpressUtils.successResponse(res, { deleted: { id, ...result } })
    } catch (e) {
      logger.error(e)
      return ExpressUtils.errorResponse(res, e.message)
    }
  }

  static async apiFlushProjects(req: Request, res: Response) {
    try {
      const result = await ProjectModel.deleteMany({})
      await AWSUtils.deleteAllFilesFromS3()
      return ExpressUtils.successResponse(res, { deleted: result })
    } catch (e) {
      logger.error(e)
      return ExpressUtils.errorResponse(res, e.message)
    }
  }

  static async apiGetFeaturedProjects(req: Request, res: Response) {
    const { items } = req.query
    try {
      const featured = await ProjectModel.find({ featured: true }).limit(Number(items))
      return ExpressUtils.successResponse(res, { projects: featured })
    } catch (e) {
      logger.error(e)
      return ExpressUtils.errorResponse(res, e.message)
    }
  }
}
