import React, { useState } from 'react'

import Center from '@components/Center'
import Image from '@components/Image'
import Vakinha from '@components/Vakinha'
import Social from '@components/Social'
import MenuHamburger from '@components/MenuHamburger'
import Menu from '@components/Menu'

import {
  Container,
  MenuHeader,
  Logo,
  Right,
  Socials,
  MenuContent,
} from './styles'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <Container open={open}>
      <MenuHeader>
        <Center>
          <Logo to='/'>
            <Image src='logo.png' alt='Brasil contra o Vírus' />
          </Logo>

          <Right>
            <Vakinha hoverColor='green' />

            <Socials>
              <Social type='facebook' hoverColor='green' />
              <Social type='twitter' hoverColor='green' />
              <Social type='instagram' hoverColor='green' />
            </Socials>

            <MenuHamburger toogleOpen={setOpen} open={open} />
          </Right>
        </Center>
      </MenuHeader>

      <MenuContent>
        <Menu open={open} setOpen={setOpen} />
      </MenuContent>
    </Container>
  )
}

export default Header
