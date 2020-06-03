import React from 'react'
import PropTypes from 'prop-types'

import Image from '@components/Image'

import {
  Container,
  ImageWrapper,
  Name,
  Occupation,
  Description,
} from './styles'

const Volunteer = ({ name, occupation, description, photo, color }) => (
  <Container color={color}>
    <ImageWrapper color={color}>
      <Image src={`volunteers/${photo}`} alt={name} />
    </ImageWrapper>

    <Name color={color}>{name}</Name>
    <Occupation>{occupation}</Occupation>
    <Description>{description}</Description>
  </Container>
)

Volunteer.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Volunteer.defaultProps = {
  color: 'purple',
}

export default Volunteer
