import ProjectModel from "../api/models/project.model"

export default class ProjectsDAO {
  static async getProjects() {
    return await ProjectModel.find()
  }

  static async addProject(title: String, frameworks: [String]) {
    const newProject = new ProjectModel({
      title: title,
      frameworks: frameworks
    })
    await newProject.save()
    return newProject
  }

  static async deleteProject(id) {
    const result = await ProjectModel.deleteOne({ _id: id })
    if (result.deletedCount === 0) throw new Error("No documents deleted")
  }
}
