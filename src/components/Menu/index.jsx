// import React, { useEffect } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import Social from '@components/Social'

import items from './items'

import { Items, Container, Item, Link, Socials } from './styles'

const Menu = ({ open, setOpen }) => {
  const goToLink = (e, item) => {
    e.preventDefault()
    setOpen(false)

    const window = global.window || {}

    if (item.external) {
      window.open(item.link, '_blank').focus()
      return
    }

    navigate(item.link)
  }

  return (
    <Container>
      <Items open={open}>
        {items.map((item, index) => (
          <Item key={index}>
            <Link onClick={e => goToLink(e, item)}>{item.title}</Link>
          </Item>
        ))}
      </Items>

      <Socials open={open}>
        <Social type='facebook' color='white' hoverColor='green' />
        <Social type='twitter' color='white' hoverColor='green' />
        <Social type='instagram' color='white' hoverColor='green' />
      </Socials>
    </Container>
  )
}

Menu.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool,
}

Menu.defaultProps = {
  open: false,
}

export default Menu
