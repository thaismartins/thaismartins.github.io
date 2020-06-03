import styled from 'styled-components'
import ArrowRight from '@images/icons/arrow-right.png'

const Container = styled.span`
  width: 3rem;
  height: 4rem;
  position: absolute;
  right: 1rem;
  top: calc(50% - 4rem);
  cursor: pointer;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    mask-image: url(${ArrowRight});
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center;
    background: ${({ theme, color }) =>
      theme.colors.gradients[color]
        ? theme.colors.gradients[color]
        : theme.colors[color]};
  }
`

export { Container }
