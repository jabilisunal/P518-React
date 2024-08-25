import React from 'react'

const List = ({children,data}) => {
    console.log(data);
    
  return (
    <>
    <ul>
       {children}
    </ul>
    <ul>
        {data && data.map((stu)=>{
            return <li key={stu.id}>{stu.name}</li>
        })}
    </ul>
    </>
  )
}

export default List
