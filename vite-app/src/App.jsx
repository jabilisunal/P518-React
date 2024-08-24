import React, { Fragment } from "react";
import Hello from "./components/Hello";
import Button from "./components/Button";
import Product from "./components/Products";



// import Main from "./components/Main";



function App() {
  // Fragment
  // React
  // JSX
  // hooks useState useEffect useRef
  // custom Hook
  let counter = 10;
  function handleClick() {
    console.log(counter);
  }
 
  // Components
  // Home, About, Contact, Blog, Portfolio

  const products=[
    {id:1,name:"ZARA",price:49},
    {id:2,name:"Adidas",price:439},
    {id:3,name:"Nike",price:342}
  ]
  const person1={name:"Nadir",surname:"Şirinov",age:33};
  const person2={name:"Gunel",surname:"Quliyeva",age:18}

  return (
    <>
     {/* <Main/> */}
    {/* <Hello name="Nurlan" surname="Abbasli" age={29}/>
    <Hello name="Fuad" surname="Isgenderli" age={22}/> */}
    <Button variant={"success"} text={"Create"}  color={"orange"} />
    <Button variant={"danger"}  text={"Delete"}  color={"aqua"}/>
    <Button variant={"warning"}  text={"Update"}  color={"white"}/>
    <hr />
    <Hello person={person1}/>
    <Hello person={person2}/>
    <hr />
    {/* <Product products={products}/> */}
    </>
  );
}

export default App;
