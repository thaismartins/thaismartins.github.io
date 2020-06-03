import styled from 'styled-components'
import VakinhaIcon from '@images/icons/vakinha.png'

const Container = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  margin: 0 0.5rem;
`

const Icon = styled.span`
  width: 2.75rem;
  height: 2.75rem;
  display: block;
  mask-image: url(${VakinhaIcon});
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  background: ${({ theme, color }) => theme.colors[color]};

  &:hover {
    background: ${({ theme, hoverColor }) =>
      theme.colors.gradients[hoverColor]};
  }
`

export { Container, Icon }
