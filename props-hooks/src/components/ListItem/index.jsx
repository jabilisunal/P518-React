import React from 'react'
import Title from '../Title'

const ListItem = ({prod}) => {
  return (
    <div>
      <Title name ={prod.name} price={prod.price} img={prod.img}/>
    </div>
  )
}

export default ListItem
