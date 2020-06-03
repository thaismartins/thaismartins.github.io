import React from 'react'

import PageBlock from '@components/PageBlock'
import Center from '@components/Center'
import Carousel from '@components/Carousel'
import Volunteer from '@components/Volunteer'
import ProgressBar from '@components/ProgressBar'

import volunteers from './volunteers'
import teams from './teams'

import { Container, Title, Teams, Team, Button } from './styles'

const Volunteers = () => {
  return (
    <Container id='equipe'>
      <Title>Voluntários</Title>
      <PageBlock title='Nossa Liderança' color='purple'>
        <Center>
          <Carousel dots arrows color='purple'>
            {volunteers.map((volunteer, index) => (
              <Volunteer
                key={index}
                name={volunteer.name}
                occupation={volunteer.occupation}
                description={volunteer.description}
                photo={volunteer.photo}
                color='purple'
              />
            ))}
          </Carousel>
        </Center>
      </PageBlock>
      <PageBlock title='Equipe Multidisciplinar' color='purple'>
        <Center>
          <Teams>
            {teams.map((team, index) => (
              <Team key={index}>
                <ProgressBar
                  title={team.title}
                  units={team.percentage}
                  unit='%'
                  total={100}
                  color='purple'
                />
              </Team>
            ))}
          </Teams>
        </Center>
      </PageBlock>
    </Container>
  )
}

export default Volunteers
