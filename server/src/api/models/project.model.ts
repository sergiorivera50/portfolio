import { Schema, model } from 'mongoose'

const Resource = new Schema({
  name: { type: String, required: true },
  url:  { type: String, required: true },
  icon: { type: String }
})

const ProjectSchema = new Schema({
  creationDate:     { type: Date,   default:  Date.now },  // date when the project was started
  shortTitle:       { type: String, required: true     },  // really short title
  fullTitle:        { type: String, required: true     },  // long title
  shortDescription: { type: String, required: true     },  // really short description
  fullDescription:  { type: String, required: true     },  // long description
  thumbnail:        { type: String, required: true     },  // thumbnail url
  markdownContent:  { type: String, required: true     },  // full content in markdown
  status:           { type: String, required: true     },  // current status of the project
  tags:             { type: [String]                   },  // technologies, frameworks, techniques, ...
  resources:        { type: [Resource]                 },  // urls pointing to external resources
  featured:         { type: Boolean, default: false    },  // top 4 projects
})

const ProjectModel = model('Project', ProjectSchema)

export default ProjectModel
