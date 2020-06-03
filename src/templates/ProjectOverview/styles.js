import styled from 'styled-components'
import media from '@layouts/media'

import CarouselComponent from '@components/Carousel'

const Container = styled.div`
  width: 100%;
  padding: 3rem 0 8rem;

  @media ${media.max.medium} {
    padding: 3rem 0;
  }
`

const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  padding-bottom: 1rem;
  margin: 2rem 0;
  border-bottom: 0.15rem solid ${({ theme }) => theme.colors.orange};
  text-transform: uppercase;

  @media ${media.max.medium} {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`
const Carousel = styled(CarouselComponent)`
  .slick-list {
    border-radius: 5rem;

    @media ${media.max.medium} {
      border-radius: 1rem;
    }
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  max-height: 90vh;
  display: block !important;
  margin: auto;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -0.5rem;
    right: -0.5rem;
    border-radius: 5rem;
    background: ${({ theme }) => theme.colors.gradients.orange};
    opacity: 0.4;

    @media ${media.max.medium} {
      border-radius: 1rem;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    display: contents;

    img {
      border-radius: 5rem;
      overflow: hidden;

      @media ${media.max.medium} {
        border-radius: 1rem;
      }
    }
  }
`

const Details = styled.div`
  width: 100%;
  position: relative;
`

const DetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 2rem 5rem 0;

  @media ${media.max.medium} {
    padding: 0;
  }

  &:before {
    content: '';
    width: 100%;
    height: 200%;
    position: absolute;
    bottom: -100%;
    z-index: -1;
    background: ${({ theme }) => theme.colors.orange};
    background: ${({ theme }) =>
      `radial-gradient(circle, ${theme.colors.orange} -100%, rgba(255,255,255,0) 56%)`};

    @media ${media.max.medium} {
      display: none;
    }
  }
`

const Infos = styled.div`
  width: 50%;
  padding: 2rem;
  box-shadow: 0 0 0.5rem 0.25rem ${({ theme }) => theme.colors.shadows.orange};
  border-top-right-radius: 3rem;
  border-top-left-radius: 3rem;
  background: ${({ theme }) => theme.colors.white};
  min-height: 20rem;
  display: flex;
  flex-wrap: wrap;

  @media ${media.max.medium} {
    width: 100%;
    box-shadow: none;
    padding: 2rem 1rem 0;
  }
`

const Text = styled.p`
  width: 100%;
  margin-bottom: 1.5rem;

  &:last-of-type {
    margin-bottom: 3rem;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  justify-self: flex-end;

  > div {
    margin-right: 1rem;

    @media ${media.max.medium} {
      margin-bottom: 1rem;
      margin-right: 0;
    }
  }

  @media ${media.max.medium} {
    flex-direction: column;
    align-items: center;
  }
`

const ShareButtons = styled.div`
  width: 100%;
  position: absolute;
  bottom: -1.5rem;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
  padding: 0 5rem;

  @media ${media.max.medium} {
    padding: 1rem 0;
    justify-content: center;
    position: relative;
  }

  &:before {
    content: '';
    width: calc(100% - 10rem);
    height: 0.15rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
    background: ${({ theme }) => theme.colors.gradients.orange};

    @media ${media.max.medium} {
      width: 100%;
    }
  }
`

export {
  Container,
  Title,
  Carousel,
  ImageWrapper,
  Details,
  DetailsWrapper,
  Infos,
  Text,
  Buttons,
  ShareButtons,
}
