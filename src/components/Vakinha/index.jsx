import React from 'react'
import PropTypes from 'prop-types'

import Link from '@components/Link'

import { Container, Icon } from './styles'

const Vakinha = ({ color, hoverColor }) => (
  <Container>
    <Link
      to='https://sharity.com.br/brasil-contra-o-virus-em-sp---epis-para-os-hospitais?u=ca11b8567b8c11eabd100a536da30ee4sobre'
      blank
    >
      <Icon color={color} hoverColor={hoverColor} />
    </Link>
  </Container>
)

Vakinha.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
}

Vakinha.defaultProps = {
  color: 'dark',
  hoverColor: 'purple',
}

export default Vakinha
