import styled from 'styled-components'
import media from '@layouts/media'

import ButtonComponent from '@components/Button'

const Container = styled.div`
  width: 100%;
  padding: 8rem 0;
  position: relative;

  @media ${media.max.medium} {
    padding: 3rem 0;
  }

  &:before {
    content: '';
    width: 100%;
    height: 200%;
    position: absolute;
    bottom: -115%;
    z-index: -1;
    background: ${({ theme }) => theme.colors.green};
    background: ${({ theme }) =>
      `radial-gradient(circle, ${theme.colors.green} -100%, rgba(255,255,255,0) 56%)`};

    @media ${media.max.medium} {
      display: none;
    }
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
  border-bottom: 0.15rem solid ${({ theme }) => theme.colors.green};
  text-transform: uppercase;

  @media ${media.max.medium} {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const Text = styled.p`
  width: 100%;
  margin: auto;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 3rem;
  text-align: center;

  @media ${media.max.medium} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 6rem;

  @media ${media.max.medium} {
    flex-direction: column;
    margin-top: 2rem;
  }
`

const Button = styled(ButtonComponent)`
  font-size: 1.25rem;
  margin: 0 1rem;

  @media ${media.max.medium} {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`

export { Container, Title, Text, Buttons, Button }
