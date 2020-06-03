import styled from 'styled-components'

const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: contents;

  ${props =>
    props.cover &&
    `
    width: 100%;
    height: 100%;
    object-fit: cover;
  `};
`

export { Container }
