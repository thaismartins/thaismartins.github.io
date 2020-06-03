import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import PrevArrow from './PrevArrow'
import NextArrow from './NextArrow'

import { Container } from './styles'
import settings from './settings'

const Carousel = ({
  children,
  dots,
  arrows,
  slidesToShow,
  slidesToScroll,
  color,
  full,
  className,
}) => {
  let configs = {
    ...settings.standard,
    dots,
    arrows,
    slidesToShow,
    slidesToScroll,
    prevArrow: <PrevArrow color={color} />,
    nextArrow: <NextArrow color={color} />,
  }

  if (full) {
    configs = {
      ...configs,
      ...settings.full,
    }
  }

  return (
    <Container color={color} arrows={arrows} className={className}>
      <Slider {...configs}>{children}</Slider>
    </Container>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  color: PropTypes.string,
  dots: PropTypes.bool,
  arrows: PropTypes.bool,
  full: PropTypes.bool,
  className: PropTypes.string,
}

Carousel.defaultProps = {
  slidesToShow: 3,
  slidesToScroll: 1,
  color: 'purple',
  dots: false,
  arrows: false,
  full: false,
  className: '',
}

export default Carousel
