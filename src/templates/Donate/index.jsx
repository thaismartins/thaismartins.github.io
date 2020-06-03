import React from 'react'

import Center from '@components/Center'

import { Container, Title, Text, Buttons, Button } from './styles'

const Donate = () => {
  return (
    <Container id='doacao'>
      <Center>
        <Title>Você pode salvar uma vida</Title>
        <Text>
          A sua doação é de extrema valia para os hospitais e instituições que
          nosso projeto auxilia.
          <br />
          Ajude-nos a equipá-los para salvarmos as pessoas!
        </Text>

        <Buttons>
          <Button
            color='green'
            to='https://sharity.com.br/brasil-contra-o-virus---epis-para-os-hospitais--maio?u=ca11b8567b8c11eabd100a536da30ee4'
            blank
            rounded
          >
            Doe para uma Vaquinha
          </Button>
          <Button color='green' rounded to='/#faca-parte'>
            Seja um Voluntário
          </Button>
        </Buttons>
      </Center>
    </Container>
  )
}

export default Donate
