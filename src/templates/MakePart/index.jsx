import React from 'react'

import Background from '@components/Background'
import Center from '@components/Center'

import {
  Container,
  Title,
  Blocks,
  Block,
  Subtitle,
  Text,
  List,
  Item,
  Name,
  IconWrapper,
  Icon,
  Buttons,
  Button,
} from './styles'

import networks from './networks'

const MakePart = () => {
  return (
    <Container id='faca-parte'>
      <Background color='green' full>
        <Center>
          <Title>Faça parte dessa rede</Title>

          <Blocks>
            <Block border>
              <Subtitle>Preciso de ajuda</Subtitle>
              <Text>
                Cadastre sua instituição, informe a sua necessidade e receba
                doações.
              </Text>

              <List>
                {networks.institutions.map((institution, index) => (
                  <Item
                    key={index}
                    href={institution.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <IconWrapper>
                      <Icon image={institution.icon} />
                    </IconWrapper>
                    <Name>{institution.title}</Name>
                  </Item>
                ))}
              </List>
            </Block>

            <Block>
              <Subtitle>Quero ajudar</Subtitle>
              <Text>
                Ajude a produzir EPIs para os profissionais que devemos proteger
                ou contribua com uma doação monetária.
              </Text>

              <List>
                {networks.volunteers.map((volunteer, index) => (
                  <Item
                    key={index}
                    href={volunteer.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <IconWrapper>
                      <Icon image={volunteer.icon} />
                    </IconWrapper>
                    <Name>{volunteer.title}</Name>
                  </Item>
                ))}
              </List>

              <Buttons>
                <Button color='whiteGreen' rounded uppercase to='/'>
                  Vaquinha
                </Button>

                <Button
                  color='whiteGreen'
                  rounded
                  uppercase
                  blank
                  to='https://docs.google.com/forms/d/e/1FAIpQLSf0txw59GT1GJ5_key4Ff_pNdA23lRg__C8xFUMwquGmcHiwg/viewform'
                >
                  Junte-se a Nós
                </Button>
              </Buttons>
            </Block>
          </Blocks>
        </Center>
      </Background>
    </Container>
  )
}

export default MakePart
