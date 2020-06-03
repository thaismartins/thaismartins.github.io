import React from 'react'
import PropTypes from 'prop-types'

import Image from '@components/Image'

import { Container, Photo, Text, Details, Name, Occupation } from './styles'

const Testimony = ({ name, about, text, photo, color }) => {
  return (
    <Container color={color}>
      <Photo color={color}>
        <Image src={photo} alt={name} />
      </Photo>

      <Text>{text}</Text>

      <Details>
        <Name>{name}</Name>
        <Occupation color={color}>{about}</Occupation>
      </Details>
    </Container>
  )
}

Testimony.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Testimony.defaultProps = {
  color: 'yellow',
}

export default Testimony
