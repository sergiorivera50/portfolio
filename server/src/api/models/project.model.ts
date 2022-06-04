import { Schema, model } from 'mongoose'

const ProjectSchema = new Schema({
  title: String,
  frameworks: [String],
  date: { type: Date, default: Date.now }
})

const ProjectModel = model('Project', ProjectSchema)

export default ProjectModel
