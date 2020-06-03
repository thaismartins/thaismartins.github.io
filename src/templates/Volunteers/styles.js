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
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 4rem;
  text-transform: uppercase;

  @media ${media.max.medium} {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`

const Team = styled.div`
  flex: 0 1 calc(50% - 1rem);

  @media ${media.max.medium} {
    flex: 1 1 100%;
  }
`

const Button = styled(ButtonComponent)`
  font-size: 1.25rem;

  @media ${media.max.medium} {
    font-size: 1rem;
  }
`

export { Container, Title, Teams, Team, Button }
