import React from 'react'

import Center from '@components/Center'
import Image from '@components/Image'
import Social from '@components/Social'

import {
  Container,
  Logo,
  Details,
  Address,
  Email,
  Phones,
  Phone,
  Socials,
} from './styles'

const Header = () => {
  return (
    <Container id='contato'>
      <Center>
        <Logo>
          <Image src='logo.png' alt='Brasil contra o Vírus' />
        </Logo>

        <Details>
          <Address>
            Av Pres. Castelo Branco, 6061
            <br />
            São Paulo, SP
          </Address>
          <Email to='mailto:brcontraovirus@gmail.com'>
            brcontraovirus@gmail.com
          </Email>
          <Phones>
            <Phone>+55 12 98120 7722</Phone>
            <Phone>+55 11 99136 2636</Phone>
            <Phone>+55 11 97281 1999</Phone>
          </Phones>

          <Socials>
            <Social type='facebook' />
            <Social type='twitter' />
            <Social type='instagram' />
          </Socials>
        </Details>
      </Center>
    </Container>
  )
}

export default Header
