import React from 'react'
import PropTypes from 'prop-types'

import Image from '@components/Image'

import { Container, Wrapper, Carousel, ImageWrapper, Close } from './styles'

const Gallery = ({ open, setClose, images, title }) => (
  <Container open={open}>
    <Close onClick={setClose} />

    <Wrapper open={open}>
      <Carousel color='white' arrows full>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <Image
              src={image}
              alt={title}
              fit='contain'
              style={{
                width: '90%',
                height: '90%',
                margin: 'auto',
                right: 0,
                bottom: 0,
              }}
            />
          </ImageWrapper>
        ))}
      </Carousel>
    </Wrapper>
  </Container>
)

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  setClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
}

Gallery.defaultProps = {
  open: false,
}

export default Gallery
