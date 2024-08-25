import { useState } from 'react'
import './App.css'
import Modal from './components/Modal';
import Students from './components/Students';

function App() {
  // hooks - useState, useEffect, useRef, useParam ...
  const[counter,setCounter]=useState(0);
  const[openModal,setOpenModal]=useState(false);

  function increaseButton(){
    setCounter(counter +1)
  }
  function decreaseButton(){
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <>
    <button onClick={increaseButton}>+</button>
    <span>{counter}</span>
    <button onClick={decreaseButton}>-</button>
    <button onClick={()=>{
      setCounter(0)
    }}>Reset</button>
    <button onClick={()=>{
      setOpenModal(true)
    }}>open Modal</button>

    {openModal  &&   <Modal setOpenModal={setOpenModal} />}
    <br />
    <br />
    <hr />
    <Students/>
    </>
  )
}

export default App
