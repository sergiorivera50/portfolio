import { Schema, model } from 'mongoose'

const ProjectSchema = new Schema({
  creationDate:     { type: Date,   default:  Date.now },  // date when the project was started
  title:            { type: String, required: true     },  // a title for the project
  description:      { type: String, required: true     },  // a short description of the project
  markdown:         { type: String, required: true     },  // full content in markdown
  technologies:     { type: [String]                   },  // technologies or frameworks used
  featured:         { type: Boolean, default: false    },  // is it among the top 4 projects
})

const ProjectModel = model('Project', ProjectSchema)

export default ProjectModel
