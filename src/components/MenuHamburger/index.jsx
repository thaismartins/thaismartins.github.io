import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const MenuHamburger = ({ open, toogleOpen }) => {
  return (
    <Container open={open} onClick={() => toogleOpen(!open)}>
      <div />
      <div />
      <div />
    </Container>
  )
}

MenuHamburger.propTypes = {
  open: PropTypes.bool.isRequired,
  toogleOpen: PropTypes.func.isRequired,
}

export default MenuHamburger
