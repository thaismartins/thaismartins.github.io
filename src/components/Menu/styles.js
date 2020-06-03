import styled from 'styled-components'
import media from '@layouts/media'

const Container = styled.div`
  width: 100%;
  max-width: 35rem;
  height: 100%;
  margin: auto;

  @media ${media.max.medium} {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`

const Items = styled.div`
  width: 100%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 6rem;

  @media ${media.max.medium} {
    margin-top: 2rem;
    flex-direction: column;
  }
`

const Item = styled.div`
  padding: 0.5rem 0;
  flex: 0 1 50%;
  font-weight: 700;
  font-size: 1.5rem;

  @media ${media.max.medium} {
    font-size: 1.25rem;
  }

  &:nth-child(even) {
    @media ${media.min.medium} {
      text-align: right;
    }
  }
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`

const Socials = styled.div`
  display: none;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;

  @media ${media.max.medium} {
    display: ${({ open }) => (open ? ' flex' : 'none')};
  }
`

export { Container, Items, Item, Link, Socials }
