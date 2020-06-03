import styled from 'styled-components'
import media from '@layouts/media'

const Content = styled.div`
  width: 100%;
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  padding-top: 3rem;
  top: -2.1rem;

  &:after {
    content: '';
    width: 90%;
    max-width: 60rem;
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 0;
    display: ${({ border }) => (border ? 'block' : 'none')};

    ${({ theme, color }) =>
      color &&
      `
      background: ${theme.colors.gradients[color]};
    `};
  }

  &:before {
    content: '';
    width: 100%;
    height: 200%;
    position: absolute;
    top: -100%;
    z-index: -1;

    ${({ theme, color }) =>
      color &&
      `
      background: ${theme.colors[color]};
      background: radial-gradient(circle, ${theme.colors[color]} -100%, rgba(255,255,255,0) 62%);
    `};
  }

  @media ${media.max.medium} {
    top: -1.6rem;
  }
`

export { Content }
