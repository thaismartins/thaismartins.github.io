import React from 'react'
import PropTypes from 'prop-types'

import { Items, Item } from './styles'

const ListItems = ({ items }) => (
  <Items>
    {items.map((item, index) => (
      <Item key={index}>{item}</Item>
    ))}
  </Items>
)

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default ListItems
