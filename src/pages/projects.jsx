import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@layouts/Default'

import SEO from '@components/SEO'

import Banner from '@templates/Banner'
import ProjectOverview from '@templates/ProjectOverview'
import ProjectDetails from '@templates/ProjectDetails'
import Donate from '@templates/Donate'

const ProjectsPage = ({ pageContext }) => {
  const {
    title,
    images,
    category,
    details,
    procedures,
    technology,
    materials,
    downloads,
    designers,
  } = pageContext

  return (
    <Layout>
      <SEO title={title} />

      <Banner image='banner-projects.jpg' buttons={false} />

      <ProjectOverview
        title={title}
        images={images}
        category={category}
        technology={technology}
        materials={materials}
        downloads={downloads}
        designers={designers}
      />

      <ProjectDetails details={details} procedures={procedures} />

      <Donate />
    </Layout>
  )
}

const proceduresType = {
  title: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
}

ProjectsPage.propTypes = {
  pageContext: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.string,
    technology: PropTypes.string,
    materials: PropTypes.string,
    designers: PropTypes.string,
    downloads: PropTypes.arrayOf(PropTypes.string),
    procedures: PropTypes.shape({
      makers: PropTypes.arrayOf(PropTypes.shape(proceduresType)),
      hospitals: PropTypes.arrayOf(PropTypes.shape(proceduresType)),
    }),
  }).isRequired,
}

export default ProjectsPage
