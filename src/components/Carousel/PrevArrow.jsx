import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './PrevArrow.styles'

const PrevArrow = ({ className, style, onClick, color }) => (
  <Container
    className={className}
    onClick={onClick}
    style={{ ...style }}
    color={color}
  />
)

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  onClick: PropTypes.func,
  color: PropTypes.string,
}

PrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
  color: 'purple',
}

export default PrevArrow
