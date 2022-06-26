import http from '../http'

export default class {
  static async getAllProjects() {
    return http.get(`/projects`)
  }

  static async getProjectById(id) {
    return http.get(`/projects/${id}`)
  }

  static async getFeaturedProjects(items = 4) {
    return http.get(`/projects/featured/${items}`)
  }
}
