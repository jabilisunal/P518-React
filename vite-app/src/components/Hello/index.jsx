import React from 'react'
import "./index.css"

function Hello({person}) {
const{name,surname,age}=person
    
  return (
   
    <h3>Hi,{person.age} {surname} {age}</h3>
  )
}

export default Hello
