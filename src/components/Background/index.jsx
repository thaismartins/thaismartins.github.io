import React from 'react'
import PropTypes from 'prop-types'

import Image from '@components/Image'

import { Container, ImageWrapper, ContentWrapper } from './styles'

const Background = ({ children, image, alt, color, full }) => (
  <Container full={full} color={color} hasImage={image}>
    {image && (
      <ImageWrapper>
        <Image src={image} alt={alt} fit='cover' />
      </ImageWrapper>
    )}

    <ContentWrapper>{children}</ContentWrapper>
  </Container>
)

Background.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  alt: PropTypes.string,
  color: PropTypes.string,
  full: PropTypes.bool,
}

Background.defaultProps = {
  children: '',
  image: '',
  alt: '',
  color: '',
  full: false,
}

export default Background
