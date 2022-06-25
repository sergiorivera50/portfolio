import http from '../http'

export default class {
  static async getAllProjects() {
    return http.get(`/projects`)
  }

  static async getProjectById(id) {
    return http.get(`/projects/${id}`)
  }
}
