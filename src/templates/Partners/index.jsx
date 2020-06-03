import React from 'react'

import Center from '@components/Center'
import PageBlock from '@components/PageBlock'
import Carousel from '@components/Carousel'
import Image from '@components/Image'

import partners from './partners'

import { Container, Title, Partner, Buttons, Button } from './styles'

const style = {
  width: '80%',
  height: '80%',
  bottom: 0,
  right: 0,
  margin: 'auto',
}

const color = 'pink'

const Partners = () => {
  return (
    <Container id='apoio'>
      <Title>Apoio e Gratidão</Title>
      <PageBlock color={color} border>
        <Center>
          <Carousel
            arrows
            dots
            slidesToShow={6}
            slidesToScroll={2}
            color={color}
          >
            {partners.map((partner, index) => (
              <Partner key={index} color={color}>
                <Image src={partner.image} alt={partner.title} style={style} />
              </Partner>
            ))}
          </Carousel>
          <Buttons>
            <Button to='#faca-parte' color={color} rounded uppercase>
              Faça Parte da Lista
            </Button>
          </Buttons>
        </Center>
      </PageBlock>
    </Container>
  )
}

export default Partners
