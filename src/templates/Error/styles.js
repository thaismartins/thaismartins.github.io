import styled from 'styled-components'
import media from '@layouts/media'

import ErrorIcon from '@images/icons/404.svg'

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Description = styled.p``

const Image = styled.div`
  max-width: 100%;
  width: 12rem;
  height: 12rem;
  mask-image: url(${ErrorIcon});
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  background: ${({ theme }) => theme.colors.gradients.green};

  @media ${media.max.small} {
    width: 10rem;
    height: 10rem;
  }
`

export { Container, Title, Description, Image }
