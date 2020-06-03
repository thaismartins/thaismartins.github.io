import styled from 'styled-components'
import media from '@layouts/media'

import ButtonComponent from '@components/Button'

import PlusIcon from '@images/icons/plus.svg'
import LinkIcon from '@images/icons/link.svg'

const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 0.5rem 0.25rem
    ${({ theme, color }) => theme.colors.shadows[color]};
  text-align: center;
  border-radius: 2.5rem;
  overflow: hidden;
  cursor: pointer;
`

const ImageWrapper = styled.div`
  height: 13rem;
  overflow: hidden;
  position: relative;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ButtonsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ theme, color }) => theme.colors.gradients[color]};
    z-index: 0;
    opacity: 0.8;
  }
`

const Buttons = styled.div`
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`

const DefaultButton = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  background-image: ${({ theme }) => theme.colors.gradients.orange};
  display: inline-flex;
`

const PlusButton = styled(DefaultButton)`
  mask-image: url(${PlusIcon});
`

const LinkButton = styled(DefaultButton)`
  mask-image: url(${LinkIcon});
`

const Button = styled(ButtonComponent)`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    ${LinkButton},
    ${PlusButton} {
      background: ${({ theme }) => theme.colors.white};
    }
  }
`

const Details = styled.div`
  margin: 2rem 1rem;

  @media ${media.max.medium} {
    margin: 1rem;
  }
`

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  margin: 0 0 0.5rem;
`

const Category = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`

export {
  Container,
  ImageWrapper,
  ButtonsWrapper,
  Buttons,
  Button,
  PlusButton,
  LinkButton,
  Details,
  Title,
  Category,
}
