import React from 'react'
import PropTypes from 'prop-types'

import Image from '@components/Image'
import Button from '@components/Button'

import { Container, Logo, Text } from './styles'

const Headline = ({ title, text, link, image, color }) => {
  return (
    <Container color={color}>
      <Logo color={color}>
        <Image src={`press/${image}`} alt={title} />
      </Logo>

      <Text>{text}</Text>

      <Button to={link} color={color} rounded uppercase center blank>
        Saiba Mais
      </Button>
    </Container>
  )
}

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Headline.defaultProps = {
  color: 'green',
}

export default Headline
