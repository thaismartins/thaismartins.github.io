import styled from 'styled-components'
import media from '@layouts/media'

const images = require.context('@images/icons', true)

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  min-height: 12rem;
  padding-left: ${({ rtl }) => (rtl ? '0' : '4rem')};
  padding-right: ${({ rtl }) => (rtl ? '4rem' : '0')};

  @media ${media.max.medium} {
    padding-left: 0;
    padding-right: 0;
  }
`

const IconWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${({ rtl }) => (rtl ? '0' : 'auto')};
  left: ${({ rtl }) => (rtl ? 'auto' : '0')};
  z-index: 1;

  @media ${media.max.medium} {
    position: relative;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    width: 6rem;
    height: 6rem;
  }
`

const Icon = styled.div`
  width: 60%;
  height: 60%;
  mask-image: url(${({ image }) => images(`./${image}`)});
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  background: ${({ theme, color }) => theme.colors.gradients[color]};
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding-left: ${({ rtl }) => (rtl ? '0' : '6rem')};
  padding-right: ${({ rtl }) => (rtl ? '6rem' : '0')};
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  text-align: ${({ rtl }) => (rtl ? 'right' : 'left')};
  position: relative;

  @media ${media.max.medium} {
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }

  &:before {
    content: '';
    width: 100%;
    height: 0.15rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.white};

    ${({ theme, rtl, gradient }) =>
      gradient &&
      `
      background: linear-gradient(${rtl ? '-90deg' : '90deg'}, ${
        theme.colors.white
      } 0%, rgba(252,176,69,0) 100%);
    `};
  }
`

const Text = styled.div`
  padding-left: ${({ rtl }) => (rtl ? '0' : '6rem')};
  padding-right: ${({ rtl }) => (rtl ? '6rem' : '0')};
  width: 100%;
  font-size: 1.125rem;
  text-align: ${({ rtl }) => (rtl ? 'right' : 'left')};

  @media ${media.max.medium} {
    padding-left: 0;
    padding-right: 0;
    font-size: 1rem;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => theme.transition};
    font-weight: 700;

    &:hover {
      opacity: 0.9;
    }
  }
`

export { Container, IconWrapper, Icon, Title, Text }
