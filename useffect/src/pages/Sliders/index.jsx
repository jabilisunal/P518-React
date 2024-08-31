import React from "react";
import { Helmet } from "react-helmet-async";
import { DiCssTricks } from "react-icons/di";
import TreeImage from "../../images/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg";

const Sliders = () => {
  return (
    <div>
      <Helmet>
        <title>Slider Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {/* <h1>Here is Sliders</h1>
      <DiCssTricks onClick={()=>{
        console.log("SALAM");
        
      }} />
      <i class="fa-solid fa-magnifying-glass"></i> */}

      <img
        src="https://images.pexels.com/photos/11213182/pexels-photo-11213182.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />

      {/* <img className="w-36 h-[300px]" src={TreeImage} alt="" /> */}
    </div>
  );
};

export default Sliders;
