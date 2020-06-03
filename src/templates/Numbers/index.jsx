import React from 'react'

import Center from '@components/Center'
import PageBlock from '@components/PageBlock'
import Counter from '@components/Counter'
import ProgressBar from '@components/ProgressBar'

import numbers from './numbers'
import hospitals from './hospitals'

import {
  Container,
  Title,
  NumbersLists,
  Number,
  Hospitals,
  Hospital,
} from './styles'

const Numbers = () => {
  return (
    <Container>
      <Title>Números</Title>
      <PageBlock title='Já contamos com' color='green'>
        <Center>
          <NumbersLists>
            {numbers.map((number, index) => (
              <Number key={index}>
                <Counter
                  key={index}
                  number={number.number}
                  description={number.description}
                  icon={number.icon}
                />
              </Number>
            ))}
          </NumbersLists>
        </Center>
      </PageBlock>
      <PageBlock title='Doações' color='green'>
        <Center>
          <Hospitals>
            {hospitals.map((hospital, index) => (
              <Hospital key={index}>
                <ProgressBar
                  title={hospital.title}
                  total={hospital.total}
                  units={hospital.units}
                  unit='Unidades'
                />
              </Hospital>
            ))}
          </Hospitals>
        </Center>
      </PageBlock>
    </Container>
  )
}

export default Numbers
