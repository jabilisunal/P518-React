import React from 'react'
import "./index.css"
function Button({variant,text,color}) {
  return (
    <button style={{color:color}} className={variant}>{text}</button>
  )
}

export default Button;
