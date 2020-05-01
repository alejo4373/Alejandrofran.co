import React from 'react'

const BeltItem = ({ item }) => {
  const { svgIcon: SvgIcon, name, id, } = item
  return (
    <li>
      <SvgIcon id={id} className={'svg-logo'} />
      <h4>{name}</h4>
    </li>
  )
}

export default BeltItem
