import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  background: ${({ theme, color }) =>
    color ? theme.colors.gradients[color] : ''};
  overflow: hidden;
  position: relative;
  min-height: ${({ full }) => (full ? 'calc(100vh - 7rem)' : 'auto')};
  padding: ${({ hasImage }) => (hasImage ? '0' : '8rem 0')};

  @media ${media.max.medium} {
    padding: ${({ hasImage }) => (hasImage ? '0' : '2rem 0')};
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export { Container, ImageWrapper, ContentWrapper }
