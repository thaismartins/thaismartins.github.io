import React from 'react'
import PropTypes from 'prop-types'

import Image from '@components/Image'
import Gallery from '@components/Gallery'

import {
  Container,
  ImageWrapper,
  ButtonsWrapper,
  Buttons,
  Button,
  PlusButton,
  LinkButton,
  Details,
  Title,
  Category,
} from './styles'

const Project = ({
  images,
  title,
  category,
  slug,
  show,
  color,
  className,
  open,
  setOpen,
  setClose,
}) =>
  show ? (
    <>
      <Container color={color} className={className}>
        <ImageWrapper>
          <Image src={images[0]} alt={title} fit='cover' />

          <ButtonsWrapper color={color}>
            <Buttons>
              <Button color='whiteYellow' onClick={setOpen} circle center>
                <PlusButton />
              </Button>
              <Button color='whiteYellow' circle to={`/${slug}`} center>
                <LinkButton />
              </Button>
            </Buttons>
          </ButtonsWrapper>
        </ImageWrapper>
        <Details>
          <Title>{title}</Title>
          <Category>{category}</Category>
        </Details>
      </Container>

      <Gallery images={images} title={title} open={open} setClose={setClose} />
    </>
  ) : (
    ''
  )

Project.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
  setClose: PropTypes.func.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  show: PropTypes.bool,
  open: PropTypes.bool,
}

Project.defaultProps = {
  color: 'orange',
  className: '',
  show: true,
  open: false,
}

export default Project
