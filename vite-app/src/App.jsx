import React, { Fragment } from "react";
import Main from "./components/Main";



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
  return (
    <>
     <Main/>
    </>
  );
}

export default App;
