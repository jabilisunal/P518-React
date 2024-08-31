import React, { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";

const CategoryDetail = () => {
  const { id } = useParams();
  const [category,setCategory]=useState();
  useEffect(()=>{
        fetch(`https://northwind.vercel.app/api/categories/${id}`)
        .then((res)=>res.json())
        .then((data)=>setCategory(data))

  },[])

  return (
    <div>
      <Helmet>
        <title>Detail  Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Detail Page</h1>
      <div>
        {category && 
         
         <>
         <h1>{category.id}</h1>
         <h2>{category.name}</h2>
         <p>{category?.description}</p>
         </>}
      </div>
      <Link to={"/"}> <button>Go  Back</button></Link>
     
       
    </div>
  );
};

export default CategoryDetail;
