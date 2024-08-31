import React, { useState } from "react";

const AddCategory = ({ setCategories }) => {
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  function checkValidation(){
    const valid ={name:false,description:false}
    if(newCategory.name.length==0){
        setNameError(true)
        valid.name=true;
    }
    else{
        setNameError(false)
        valid.name=false;
    }
    if(newCategory.description.length==0){
        setDescriptionError(true)
        valid.description=true
    }
    else{
        setDescriptionError(false)
        valid.description=false
    }
    if(valid.name || valid.description){
        return false;
    }
    else{
        return true;
    }
  }
//   Fetch post
// update state
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();

        const isValid =checkValidation();
        if(isValid){
            fetch("https://northwind.vercel.app/api/categories",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(newCategory)
            })
            .then((res)=>(res.json()))
            .then((data)=>setCategories((categories)=>{
                return[...categories,data]
            }))
            setNewCategory({name:"",description:""})
        }
      }} action="">
        <div>
          <input value={newCategory.name} onChange={(e)=>{
            setNewCategory({...newCategory,name:e.target.value})
          }} type="text" placeholder="Enter Category Name" />
          <br />

          {nameError && (
            <span style={{ color: "red" }}>Category name is required !</span>
          )}
        </div>
        <div>
          <input value={newCategory.description}  onChange={(e)=>{
            setNewCategory({...newCategory,description:e.target.value})
          }}  type="text" placeholder="Enter Description" />
          <br />
          {descriptionError && (
            <span style={{ color: "red" }}>Description is required !</span>
          )}
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddCategory;
