const fs = require('fs')
const path = require('path')
const axios = require('axios')
const FormData = require('form-data')

// const api = axios.create({
//   baseURL: 'http://localhost:8000/api/v1',
//   timeout: 20000,
//   headers: {
//     'Content-type': 'application/json'
//   }
// })

const api = axios.create({
    baseURL: 'http://sergiorivera-portfolio-server.herokuapp.com/api/v1',
    timeout: 20000,
    headers: {
      'Content-type': 'application/json'
    }
  })

let projects = []

fs.readdir('./projects', { withFileTypes: true }, async (err, dirs) => {
  if (err) throw err

  /* Load projects list */

  dirs.forEach(dir => {
    if (dir.isDirectory()) projects.push(dir.name)
  })

  /* Create each project */

  projects.forEach(project => {
    const form = new FormData()
    form.append('metadata', fs.createReadStream(`./projects/${project}/meta.json`))
    form.append('markdown', fs.createReadStream(`./projects/${project}/content.md`))
    form.append('thumbnail', fs.createReadStream(`./projects/${project}/thumbnail.png`))

    const headers = {
      "Content-Type": `multipart/form-data; boundary=${form.getBoundary()}`
    }

    api.post('/projects', form, { headers })
      .then((res) => 
        console.log(`Created project ${project} => ${res.data.created._id}`)
      )
      .catch(err => {
        if (err.response !== undefined)
          console.error(`Error for ${project} => ${err.response.data.error}`)
        else console.error(err)
      })
  })
})