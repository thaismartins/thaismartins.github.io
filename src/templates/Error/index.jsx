import React from 'react'

import Center from '@components/Center'

import { Container, Title, Description, Image } from './styles'

const Error = () => {
  return (
    <Container>
      <Center>
        <Image />

        <Title>Oops!</Title>
        <Description>Não conseguimos encontrar esta página...</Description>
      </Center>
    </Container>
  )
}

export default Error
