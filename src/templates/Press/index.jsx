import React from 'react'

import PageBlock from '@components/PageBlock'
import Center from '@components/Center'
import Carousel from '@components/Carousel'
import Headline from '@components/Headline'

import { Container, Title } from './styles'

import headlines from './headlines'

const Press = () => {
  return (
    <Container id='reportagens'>
      <Title>Reportagens</Title>
      <PageBlock color='green' border>
        <Center>
          <Carousel dots arrows color='green'>
            {headlines.map((headline, index) => (
              <Headline
                key={index}
                image={headline.image}
                title={headline.title}
                text={headline.title}
                link={headline.link}
              />
            ))}
          </Carousel>
        </Center>
      </PageBlock>
    </Container>
  )
}

export default Press
