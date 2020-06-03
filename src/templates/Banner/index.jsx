import React from 'react'
import PropTypes from 'prop-types'

import Center from '@components/Center'
import Background from '@components/Background'

import { Container, Content, Title, Subtitle, Buttons, Button } from './styles'

const Banner = ({ image, full, buttons }) => {
  return (
    <Container id='topo'>
      <Background image={image} alt='Brasil contra o Vírus' full={full}>
        {buttons && (
          <Center>
            <Content full={full}>
              <Title>Brasil contra o Vírus</Title>

              <Subtitle>
                Rede colaborativa de combate ao COVID-19 no Brasil
              </Subtitle>

              <Buttons>
                <Button color='whiteGreen' rounded uppercase to='/#faca-parte'>
                  Faça Parte
                </Button>
                <Button
                  color='whiteGreen'
                  rounded
                  uppercase
                  blank
                  to='https://sharity.com.br/brasil-contra-o-virus---epis-para-os-hospitais--maio?u=ca11b8567b8c11eabd100a536da30ee4'
                >
                  Vaquinha
                </Button>
              </Buttons>
            </Content>
          </Center>
        )}
      </Background>
    </Container>
  )
}

Banner.propTypes = {
  image: PropTypes.string,
  full: PropTypes.bool,
  buttons: PropTypes.bool,
}

Banner.defaultProps = {
  image: 'banner.jpg',
  full: false,
  buttons: true,
}

export default Banner
