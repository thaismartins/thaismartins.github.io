import styled, { keyframes, css } from 'styled-components'
import CloseIcon from '@images/icons/close.svg'

import CarouselComponent from '@components/Carousel'

const animationOpen = keyframes`
  0%   {
    opacity: 0;
  }
  100% {
    opacity: 1;
    display: block;
  }
`

const Container = styled.div`
  width: 100vw;
  min-width: 100%;
  height: 100vh;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  ${({ open }) =>
    open &&
    css`
      animation-name: ${animationOpen};
    `};

  ${({ open }) =>
    !open &&
    `
      display: none;
    `};
`

const Close = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-image: url(${CloseIcon});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 2;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    opacity: 0.8;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  margin: auto;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  ${({ open }) =>
    open &&
    css`
      animation-name: ${animationOpen};
    `};
`

const Carousel = styled(CarouselComponent)``

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  max-height: 90vh;
  display: block !important;
  margin: auto;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    display: contents;
  }
`

export { Container, Wrapper, Carousel, ImageWrapper, Close }
