import { Schema, model } from 'mongoose'

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  thumbnail: String,  // thumbnail URI
  frameworks: [String],
  resources: [String],  // URLs
  date: { type: Date, default: Date.now }
})

const ProjectModel = model('Project', ProjectSchema)

export default ProjectModel
