import React from 'react'

const Title = ({name,price,img}) => {
    console.log(name);
    
  return (
    <div>
      <ul>
        <li>
        {name}
        {price}
        <img width={"200px"}  height={"200px"}src={img} alt="" />
        </li>
       
      </ul>
    </div>
  )
}

export default Title
