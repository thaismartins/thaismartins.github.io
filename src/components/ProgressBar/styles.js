import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0.5rem 0;
`

const Title = styled.p`
  text-transform: uppercase;
`

const Units = styled.p``

const Progress = styled.div`
  width: 100%;
  height: 2rem;
  margin-top: 0.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.dark};
  position: relative;
  overflow: hidden;

  @media ${media.max.medium} {
    border-width: 0.05rem;
    height: 1.5rem;
  }

  &:after {
    content: '';
    width: ${({ percentage }) => percentage}%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme, color }) => theme.colors.gradients[color]};
  }
`

export { Container, Title, Units, Progress }
