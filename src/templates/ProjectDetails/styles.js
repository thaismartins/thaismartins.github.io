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
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 0.15rem solid ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  @media ${media.max.medium} {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const Text = styled.div`
  line-height: 1.5rem;
  font-size: 1.125rem;
  width: 80%;
  margin: auto;

  @media ${media.max.medium} {
    font-size: 1rem;
    line-height: 1.5rem;
    width: 100%;
  }

  p {
    margin-bottom: 2rem;

    @media ${media.max.medium} {
      margin-bottom: 1rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => theme.transition};
    font-weight: 700;

    &:hover {
      opacity: 0.9;
    }
  }
`

const Procedures = styled.div`
  width: 100%;
  margin-top: 5rem;
`

const ProcedureHeader = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  &:before {
    content: '';
    width: 100%;
    height: 0.15rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 0;
    background: ${({ theme }) => theme.colors.white};
  }
`

const ProcedureTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2.5rem;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 1.875rem;
  z-index: 1;
  background: ${({ theme }) => theme.colors.white};

  @media ${media.max.medium} {
    font-size: 1.25rem;
  }
`

const ProcedureTitleWrapper = styled.span`
  display: inline;
  background-color: ${({ theme }) => theme.colors.purple};
  background-image: ${({ theme }) => theme.colors.gradients.purple};
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  position: relative;
`

const ProcedureItem = styled(IconText)`
  margin: 2rem auto 0;
  width: 80%;

  @media ${media.max.medium} {
    margin-bottom: 2rem;
    width: 100%;
  }
`

export {
  Container,
  Title,
  Text,
  Procedures,
  ProcedureHeader,
  ProcedureTitle,
  ProcedureTitleWrapper,
  ProcedureItem,
}
