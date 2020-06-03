import styled from 'styled-components'

import TwitterIcon from '@images/icons/twitter.svg'
import FacebookIcon from '@images/icons/facebook.svg'
import InstagramIcon from '@images/icons/instagram.svg'

import LinkComponent from '@components/Link'

const icons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
}

const Container = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 0.5rem;
  display: block;
`

const Link = styled(LinkComponent)`
  width: 100%;
  height: 100%;
  display: block;
`

const Item = styled.span`
  width: 100%;
  height: 100%;
  background-image: url(${TwitterIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  mask-image: url(${({ type }) => icons[type]});
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  background: ${({ theme, color }) => theme.colors[color]};

  &:hover {
    background: ${({ theme, hoverColor }) =>
      theme.colors.gradients[hoverColor]};
  }
`

export { Container, Link, Item }
