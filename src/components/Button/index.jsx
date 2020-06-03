import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

import Link from '@components/Link'

import { Container } from './styles'

const Button = ({
  link,
  to,
  color,
  rounded,
  circle,
  uppercase,
  children,
  center,
  blank,
  className,
  onClick,
}) => {
  const isAnchor = to !== '' && to.startsWith('#')
  const isLink = to !== '' && !isAnchor

  return (
    <Container
      link={link}
      color={color}
      rounded={rounded}
      circle={circle}
      uppercase={uppercase}
      center={center}
      className={className}
    >
      {isAnchor && <Link to={to}>{children}</Link>}

      {onClick && !isAnchor && !isLink && (
        <button type='button' onClick={onClick}>
          {children}
        </button>
      )}

      {blank && isLink && (
        <Link to={to} blank>
          {children}
        </Link>
      )}

      {!blank && isLink && <GatsbyLink to={to}>{children}</GatsbyLink>}
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  uppercase: PropTypes.bool,
  center: PropTypes.bool,
  blank: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
}

Button.defaultProps = {
  to: '',
  link: false,
  rounded: false,
  circle: false,
  uppercase: false,
  center: false,
  blank: false,
  className: '',
  color: 'green',
  onClick: () => {},
}

export default Button
