import React from 'react'
import PropTypes from 'prop-types'

import PageTitle from '@components/PageTitle'
import Center from '@components/Center'

import { Content } from './styles'

const PageBlock = ({ children, title, color, border }) => (
  <>
    {title && (
      <Center>
        <PageTitle color={color} border>
          {title}
        </PageTitle>
      </Center>
    )}
    <Content color={color} border={border}>
      {children}
    </Content>
  </>
)

PageBlock.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.bool,
}

PageBlock.defaultProps = {
  title: '',
  color: 'purple',
  border: false,
}

export default PageBlock
