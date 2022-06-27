import { client } from '../http'

export default class {
  static async getAllProjects() {
    return client.get(`/projects`)
  }

  static async getProjectById(id) {
    return client.get(`/projects/id/${id}`)
  }

  static async getFeaturedProjects(items = 4) {
    return client.get(`/projects/featured?items=${items}`)
  }
}
