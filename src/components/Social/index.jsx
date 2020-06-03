import React from 'react'
import PropTypes from 'prop-types'

import { Container, Link, Item } from './styles'

import links from './links'

const Social = ({ type, color, hoverColor, className }) => {
  const { href } = links[type]
  return (
    <Container>
      <Link to={href} blank className={className}>
        <Item type={type} color={color} hoverColor={hoverColor} />
      </Link>
    </Container>
  )
}

Social.propTypes = {
  type: PropTypes.oneOf(['facebook', 'twitter', 'instagram']).isRequired,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  className: PropTypes.string,
}

Social.defaultProps = {
  color: 'dark',
  hoverColor: 'purple',
  className: '',
}

export default Social
