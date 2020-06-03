import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ src, alt, fit, style }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(src)
      })

      if (!image) return null

      const objStyle = {
        objectFit: fit,
        width: '100%',
        height: '100%',
        ...style,
      }

      const { childImageSharp, extension, publicURL } = image.node

      // svg support
      if (extension === 'svg') {
        return <img src={publicURL} alt={alt} />
      }

      return <Img alt={alt} fluid={childImageSharp.fluid} imgStyle={objStyle} />
    }}
  />
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fit: PropTypes.oneOf(['contain', 'cover']),
  style: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    bottom: PropTypes.number,
    right: PropTypes.number,
    margin: PropTypes.string,
  }),
}

Image.defaultProps = {
  fit: 'contain',
  style: {},
}

export default Image
