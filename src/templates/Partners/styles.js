import styled from 'styled-components'
import media from '@layouts/media'

import ButtonComponent from '@components/Button'

const Container = styled.div`
  width: 100%;
  padding: 8rem 0;

  @media ${media.max.medium} {
    padding: 3rem 0;
  }
`

const Title = styled.h2`
  font-size: 3.75rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  text-transform: uppercase;

  @media ${media.max.medium} {
    font-size: 2rem;
  }
`

const Partner = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  width: 8em !important;
  height: 8rem;
  max-width: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-image: ${({ theme, color }) => theme.colors.gradients[color]};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 0.25rem;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    margin: auto;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
  }
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;

  @media ${media.max.medium} {
    flex-direction: column;
  }
`

const Button = styled(ButtonComponent)`
  font-size: 1.25rem;

  @media ${media.max.medium} {
    font-size: 1rem;
  }
`

export { Container, Title, Partner, Buttons, Button }
