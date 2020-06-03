import styled from 'styled-components'
import CheckIcon from '@images/icons/check-pink.svg'

const Items = styled.ul`
  width: 100%;
`

const Item = styled.li`
  padding-left: 2.25rem;
  margin-bottom: 1.5rem;
  position: relative;

  &:before {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    background-image: url(${CheckIcon});
    background-size: 1rem;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export { Items, Item }
