import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Border,
  IconWrapper,
  Icon,
  Number,
  Description,
} from './styles'

const Counter = ({ number, description, icon, color }) => {
  const numberRef = useRef(null)

  useEffect(() => {
    let counter = 1
    const total = number + 1
    const additional = total / 6000000000000

    const inv = setInterval(() => {
      if (numberRef.current && counter < total) {
        numberRef.current.innerHTML = counter
        counter += 1
      } else clearInterval(inv)
    }, additional)
  }, [])

  return (
    <Container>
      <Border color={color}>
        <IconWrapper>
          <Icon image={icon} color={color} />
        </IconWrapper>
      </Border>
      <Number color={color} ref={numberRef} />
      <Description>{description}</Description>
    </Container>
  )
}

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Counter.defaultProps = {
  color: 'green',
}

export default Counter
