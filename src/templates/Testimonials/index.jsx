import React from 'react'

import Background from '@components/Background'
import Center from '@components/Center'
import Testimony from '@components/Testimony'

import testimonials from './testimonials'

import { Container, Title, Text, TestimonialsLists, Button } from './styles'

const Testimonials = () => {
  return (
    <Container id='depoimentos'>
      <Background color='yellow' full>
        <Center>
          <Title>Depoimentos</Title>
          <Text>Salvando vidas durante a epidemia de COVID-19</Text>

          <TestimonialsLists>
            {testimonials.map((testimony, index) => (
              <Testimony
                key={index}
                name={testimony.name}
                about={testimony.about}
                text={testimony.content}
                photo={testimony.photo}
                color='orange'
              />
            ))}
          </TestimonialsLists>
        </Center>
      </Background>
    </Container>
  )
}

export default Testimonials
