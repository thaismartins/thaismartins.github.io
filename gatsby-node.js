const routes = require('./src/routes')

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  routes.forEach(route => {
    createPage({
      path: route.path,
      component: route.component,
      context: route.context,
    })
  })
}
