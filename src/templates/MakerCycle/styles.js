import styled from 'styled-components'
import media from '@layouts/media'

import IconText from '@components/IconText'

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
  margin-bottom: 4rem;
  border-bottom: 0.15rem solid ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  @media ${media.max.medium} {
    font-size: 2rem;
  }

  @media ${media.max.small} {
    margin-bottom: 2rem;
  }
`

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${media.max.medium} {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  flex-basis: 45%;

  @media ${media.max.medium} {
    width: 80%;
    margin: 0 auto 4rem;
  }

  @media ${media.max.small} {
    width: 100%;
    margin-bottom: 2rem;
  }
`

const TextWrapper = styled.div`
  flex-basis: 48%;
  color: ${({ theme }) => theme.colors.white};
`

const Text = styled.p`
  line-height: 2rem;
  font-size: 1.125rem;

  @media ${media.max.medium} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

const Items = styled.ul`
  margin-top: 2rem;
  font-size: 1.125rem;

  @media ${media.max.medium} {
    font-size: 1rem;
  }
`

const Equipaments = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${media.max.medium} {
    flex-direction: column;
  }
`

const Equipament = styled(IconText)`
  flex-basis: 48%;
  margin-top: 4rem;

  @media ${media.max.medium} {
    margin-top: 2rem;
  }
`

export {
  Container,
  Title,
  Content,
  ImageWrapper,
  TextWrapper,
  Text,
  Items,
  Equipaments,
  Equipament,
}
