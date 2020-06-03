import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  padding: 8rem 0;

  @media ${media.max.medium} {
    padding: 3rem 0;
  }
`

const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 3.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 4rem;
  text-transform: uppercase;

  @media ${media.max.medium} {
    font-size: 2rem;
  }
`

export { Container, Title }
