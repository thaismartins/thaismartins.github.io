import React from 'react'

import Center from '@components/Center'
import Background from '@components/Background'

import { Container, Title, Text } from './styles'

const Manifest = () => {
  return (
    <Container id='manifesto'>
      <Background color='darkPurple' full>
        <Center>
          <Title>Manifesto</Title>
          <Text>
            Através do trabalho organizado e colaborativo entre profissionais,
            acadêmicos, cientistas, empresas, instituições públicas, privadas e
            o governo, acreditamos que podemos
            {` `}
            <b>
              auxiliar o Setor da Saúde e combater a epidemia de COVID-19 no
              Brasil e no Mundo
            </b>
            , através de Tecnologias emergentes e uma rede de colaboradores.
            Acreditamos que as ações da rede Brasil contra o Vírus têm a
            capacidade de alterar a maneira como
            <b> cientistas, empresas, makers e o poder público </b>
            se relacionam a fim de equacionar as demandas da sociedade
            contemporânea. Acreditamos que a
            <b> colaboração mútua na sociedade,</b>
            {` `}
            assim como as ferramentas modernas que libertam, como softwares e
            sistemas open-source, contribuem substancialmente para a difusão do
            conhecimento e oportunidade entre todos, especialmente para a
            geração de renda, empregos e empreendedores sem a capacidade
            financeira da indústria. Por fim, acreditamos que a
            <b> união da Tecnologia, conhecimento e colaboração </b>
            podem melhorar o planeta e as pessoas.
          </Text>
        </Center>
      </Background>
    </Container>
  )
}

export default Manifest
