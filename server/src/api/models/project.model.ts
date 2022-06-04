import { Schema, SchemaTypes, model } from 'mongoose'
import 'mongoose-type-url'

const ProjectSchema = new Schema({
  title: { type: SchemaTypes.String, required: true },
  frameworks: [SchemaTypes.String],
  resources: [SchemaTypes.String],  // URLs
  date: { type: SchemaTypes.Date, default: Date.now }
})

const ProjectModel = model('Project', ProjectSchema)

export default ProjectModel
