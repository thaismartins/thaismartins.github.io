import styled from 'styled-components'
import media from '@layouts/media'

import ProjectComponent from '@components/Project'
import ButtonComponent from '@components/Button'

const Container = styled.div`
  width: 100%;
  padding: 8rem 0;

  @media ${media.max.medium} {
    padding: 3rem 0;
  }
`

const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 3.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  padding-bottom: 1rem;
  margin: 2rem 0;
  border-bottom: 0.15rem solid ${({ theme }) => theme.colors.orange};
  text-transform: uppercase;

  @media ${media.max.medium} {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const Text = styled.p`
  width: 80%;
  margin: auto;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 3rem;

  @media ${media.max.medium} {
    font-size: 1rem;
    line-height: 1.5rem;
    width: 100%;
  }
`

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`

const Project = styled(ProjectComponent)`
  margin: 1rem;
  flex-basis: calc(33.33333% - 2rem);

  @media ${media.max.medium} {
    margin: 0.5rem;
    flex-basis: calc(50% - 1rem);
  }

  @media ${media.max.small} {
    flex-basis: 100%;
  }
`

const Categories = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
`

const Category = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  width: fit-content;
  max-width: 100%;
  padding: 0.75rem 2.5rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  text-transform: uppercase;
  margin-right: 1rem;
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.white};

  @media ${media.max.medium} {
    flex: 0 1 calc(50% - 1rem);
    text-align: center;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  ${({ theme, active }) =>
    active &&
    `
    background: ${theme.colors.gradients.orange};
    background-color: ${theme.colors.white};
  `}

  ${({ theme, active }) =>
    !active &&
    `
    background-color: ${theme.buttons.orange.color};
    background-image: ${theme.colors.gradients.orange};
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  `}

  &:hover {
    opacity: 0.8;
  }
`

const Buttons = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;

  &:before {
    content: '';
    width: 90%;
    height: 0.15rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 0;
    z-index: -1;
    background: ${({ theme }) => theme.colors.gradients.orange};
  }
`

const Button = styled(ButtonComponent)`
  font-size: 1.25rem;

  @media ${media.max.medium} {
    font-size: 1rem;
  }
`

export {
  Container,
  Title,
  Text,
  Projects,
  Project,
  Categories,
  Category,
  Buttons,
  Button,
}
