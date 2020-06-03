import React from 'react'
import PropTypes from 'prop-types'

import { Container, Wrapper } from './styles'

const PageTitle = ({ children, border, color }) => (
  <Container border={border} color={color}>
    <Wrapper color={color}>{children}</Wrapper>
  </Container>
)

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  border: PropTypes.bool,
}

PageTitle.defaultProps = {
  color: '',
  border: false,
}

export default PageTitle
