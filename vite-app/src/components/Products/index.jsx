import React from 'react'
import "./index.css"
function Product({products}) {
    console.log(products);
    
  return (
    <div>
   {products && products.map((product)=>{
    return <li key={product.id}>{product.name} | {product.price}</li>
   })}
    </div>
  )
}

export default Product
