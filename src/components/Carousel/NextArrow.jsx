import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './NextArrow.styles'

const NextArrow = ({ className, style, onClick, color }) => (
  <Container
    className={className}
    onClick={onClick}
    style={{ ...style }}
    color={color}
  />
)

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  onClick: PropTypes.func,
  color: PropTypes.string,
}

NextArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
  color: 'purple',
}

export default NextArrow
