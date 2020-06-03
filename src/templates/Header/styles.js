import styled from 'styled-components'
import media from '@layouts/media'
import { Link } from 'gatsby'

const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 100;
  align-items: flex-start;
  height: ${({ open }) => (open ? ' 100vh' : '4.375rem')};
  transition: ${({ theme }) => theme.transition};
  overflow: hidden;

  &:before {
    content: '';
    width: 100%;
    height: 0.25rem;
    background-image: ${({ theme }) => theme.colors.gradients.green};
    position: absolute;
    bottom: -1px;
    left: 0;
  }
`

const MenuHeader = styled.div`
  width: 100%;
  height: 4.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
`

const Logo = styled(Link)`
  width: 8.75rem;
  max-width: 50%;
`

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${media.max.medium} {
    display: none;
  }
`

const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: contents;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradients.green};
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.9;
    z-index: -1;
  }
`

export { Container, MenuHeader, Logo, Right, Socials, MenuContent }
