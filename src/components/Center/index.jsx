import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Center = ({ children }) => <Container>{children}</Container>

Center.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Center
