import React from 'react'

const About = () => {
  return (
    <div>
      <form style={{margin:"40px"}} action="">
        <br />
        <input type="text" placeholder='Enter car name' />
        <input type="text" placeholder='Enter price' />
        <button>Add</button>


        <br />
        <br />
        <br />
        <br />
        <button style={{marginLeft:"10px"}}>SORT BY NAME</button>
        <button style={{marginLeft:"10px"}}>SORT BY PRICE</button>
        <input style={{marginLeft:"10px"}} type="text" placeholder='search a car' />
        <br />
        <br />
          <ul>
            <li>BMW F10 ---10000$ <button style={{marginLeft:"10px"}}>DELETE</button>
            <button style={{marginLeft:"10px"}}>EDIT</button></li>
            <li>Hundai-20000$ <button style={{marginLeft:"10px"}}>DELETE</button>
            <button style={{marginLeft:"10px"}}>EDIT</button></li>
            <li>Mercedes-30000$ <button style={{marginLeft:"10px"}}>DELETE</button>
            <button style={{marginLeft:"10px"}}>EDIT</button></li>
          </ul>
        `
      </form>
    </div>
  )
}

export default About
