import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 0.5rem 0.25rem
    ${({ theme, color }) => theme.colors.shadows[color]};
  background: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: 2.5rem;
  cursor: pointer;
  flex-basis: calc(33.33333% - 2rem);
  margin-top: 4rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  padding: 7rem 2rem 2rem;
  position: relative;
  min-height: 22rem;

  @media ${media.max.medium} {
    padding-top: 6rem;
    min-height: 10rem;
  }
`

const ImageWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  position: absolute;
  top: -4rem;
  left: 0;
  right: 0;
  border-radius: 50%;
  overflow: hidden;
  background-image: ${({ theme, color }) => theme.colors.gradients[color]};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 0.25rem;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

const Name = styled.p`
  font-size: 1.75rem;
  font-weight: 700;

  ${({ theme, color }) =>
    color &&
    `
    font-weight: 700;
    background-color: ${theme.colors.texts[color].color};
    background-image: ${theme.colors.texts[color].gradient};
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  `};
`

const Occupation = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`

const Description = styled.p`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.gray};
`

export { Container, ImageWrapper, Name, Occupation, Description }
