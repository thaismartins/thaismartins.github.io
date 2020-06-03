import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  height: inherit;
  max-width: 73.125rem;
  margin: auto;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  flex-wrap: inherit;
  flex-direction: inherit;

  @media ${media.max.large} {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`

export { Container }
