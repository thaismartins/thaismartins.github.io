import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`

const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 3.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 0.15rem solid ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  @media ${media.max.medium} {
    font-size: 2rem;
  }
`

const Text = styled.p`
  width: 90%;
  margin: auto;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.white};

  @media ${media.max.medium} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export { Container, Title, Text }
