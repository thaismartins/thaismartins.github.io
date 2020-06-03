import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 0.5rem 0.25rem
    ${({ theme, color }) => theme.colors.shadows[color]};
  border-radius: 2.5rem;
  cursor: pointer;
  flex-basis: calc(33.33333% - 2rem);
  margin-top: 6rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  padding: 6rem 2rem 2rem;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  z-index: 0;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${media.max.medium} {
    padding-top: 4rem;
    min-height: 14rem;
  }
`

const Logo = styled.div`
  width: 8rem;
  height: 8rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  position: absolute;
  top: -6rem;
  left: 0;
  right: 0;
  background-image: ${({ theme, color }) => theme.colors.gradients[color]};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 0.25rem;
  border-radius: 50%;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
  }
`
const Text = styled.div`
  text-align: left;

  @media ${media.max.medium} {
    margin-bottom: 2rem;
  }
`

export { Container, Logo, Text }
