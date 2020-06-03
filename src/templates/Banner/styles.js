import styled from 'styled-components'
import media from '@layouts/media'

import ButtonComponent from '@components/Button'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 16rem;

  @media ${media.max.medium} {
    min-height: 10rem;
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${({ full }) => (full ? '0' : '4rem 0')};

  @media ${media.max.medium} {
    padding: ${({ full }) => (full ? '0' : '2rem 0')};
  }
`

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 4.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0.25rem 0.25rem 0 ${({ theme }) => theme.colors.dark};

  @media ${media.max.medium} {
    font-size: 3rem;
    line-height: 3rem;
  }
`

const Subtitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0.25rem 0.25rem 0 ${({ theme }) => theme.colors.dark};

  @media ${media.max.medium} {
    font-size: 1.5rem;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media ${media.max.medium} {
    flex-direction: column;
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

export { Container, Content, Title, Subtitle, Buttons, Button }
