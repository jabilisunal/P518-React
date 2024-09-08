import React, { useEffect, useState } from 'react'
import getProtectedData from '../../../services/api';

const Products = () => {
    const [lists,setList]=useState([]);

    useEffect(()=>{
        const getData =async()=>{
            try {
                const res = await getProtectedData();
                setList(res.data.data);
            } catch (error) {
                
            }
        }
        getData()
    })
  return (
    <div>
      <h1>Products</h1>
    {lists && lists.map((list)=>(
        <li>{list.name}</li>
    ))}
       
    </div>
  )
}

export default Products
