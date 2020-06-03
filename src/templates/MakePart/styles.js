import styled from 'styled-components'
import media from '@layouts/media'

import ButtonComponent from '@components/Button'

const images = require.context('@images/icons', true)

const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`

const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 3.75rem;
  font-weight: 700;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 0.15rem solid ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  @media ${media.max.medium} {
    font-size: 2rem;
  }
`

const Blocks = styled.div`
  display: flex;

  @media ${media.max.medium} {
    flex-direction: column;
  }
`

const Block = styled.div`
  padding: 2rem 4rem;

  ${({ theme, border }) =>
    border &&
    `
    border-right: 0.15rem solid ${theme.colors.white};
  `};

  @media ${media.max.medium} {
    border: none;
    padding: 2rem 0;
  }
`

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-align: center;

  @media ${media.max.medium} {
    font-size: 1.5rem;
  }
`

const Text = styled.p`
  width: 80%;
  color: ${({ theme }) => theme.colors.white};
  margin: auto;
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin-bottom: 3rem;

  @media ${media.max.medium} {
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: 1rem;
    width: 100%;
  }
`

const List = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 3rem;

  @media ${media.max.medium} {
    margin-bottom: 2rem;
  }
`

const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0.75rem;

  @media ${media.max.medium} {
    font-size: 1.25rem;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`

const Icon = styled.div`
  width: 70%;
  height: 70%;
  mask-image: url(${({ image }) => images(`./${image}`)});
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  background: ${({ theme }) => theme.colors.gradients.green};
  transition: ${({ theme }) => theme.transition};
`

const Item = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  flex: 1;

  @media ${media.max.medium} {
    font-size: 1.25rem;
    padding: 0.5rem;
  }

  &:hover {
    ${Icon} {
      background: ${({ theme }) => theme.colors.gradients.yellow};
    }

    ${Name} {
      background-image: ${({ theme }) => theme.colors.gradients.yellow};
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media ${media.max.medium} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Button = styled(ButtonComponent)`
  font-size: 1.25rem;
  margin: 0 1rem;

  @media ${media.max.medium} {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`

export {
  Container,
  Title,
  Blocks,
  Block,
  Subtitle,
  Text,
  List,
  Item,
  Name,
  IconWrapper,
  Icon,
  Buttons,
  Button,
}
