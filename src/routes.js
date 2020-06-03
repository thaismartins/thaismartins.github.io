const path = require('path')
const projects = require('./content/projects')

const routes = [
  {
    path: '/',
    component: path.resolve('src/pages/index.jsx'),
  },
]

projects.forEach(project => {
  routes.push({
    path: project.slug,
    component: path.resolve('src/pages/projects.jsx'),
    context: {
      ...project,
    },
  })
})

module.exports = routes
