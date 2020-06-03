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
  width: 80%;
  color: ${({ theme }) => theme.colors.white};
  margin: auto;
  text-align: center;
  font-size: 1.25rem;
  line-height: 2rem;
  margin-bottom: 3rem;

  @media ${media.max.medium} {
    width: 100%;
    font-size: 1rem;
  }
`

const TestimonialsLists = styled.div`
  width: 100%;
  margin-bottom: 6rem;

  @media ${media.max.medium} {
    margin-bottom: 2rem;
  }
`

const Button = styled(ButtonComponent)`
  font-size: 1.25rem;

  @media ${media.max.medium} {
    font-size: 1rem;
  }
`

export { Container, Title, Text, TestimonialsLists, Button }
