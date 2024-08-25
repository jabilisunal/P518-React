import './App.css'
import Hello from './components/Hello'
import Products from './components/Products'

function App() {
  // function hi(){
  //   console.log("HEY USER")
  // }
  // const person1={name:"User 1", surname:"user surname"}

  // function displayInfo(obj){
  //   return `${obj.name} ${obj.surname}` 
  // }

  // const products =[
  //   {id:1,name:"Iphone",price:2000 ,img:"https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-photo-of-jellyfish-swimming-underwater.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
  //   {id:2,name:"Samsung",price:1800,img:"https://images.pexels.com/photos/26690029/pexels-photo-26690029/free-photo-of-iceberg-and-ice-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
  //   {id:3,name:"Redmi",price:1500,img:"https://images.pexels.com/photos/26059002/pexels-photo-26059002/free-photo-of-waterbuck-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
  // ]
  // const students=[
  //   {id:1,name:"Student - 1"},
  //   {id:2,name:"Student - 2"},
  //   {id:3,name:"Student - 3"}
  // ]

  function handleInput(e){
    console.log(e.target.value);
  }
  
  return (
    <>
    {/* <Hello info={hi}  showInfo={()=>displayInfo(person1)}/> */}
    {/* <Products products={products} students={students}/> */}

    {/* events */}

    {/* <button onClick={()=>{
      // console.log("clicked");
      window.confirm("are you sure ?")
    }}>click</button>
    <input onKeyUp={(e)=>{
      handleInput(e)
    }} type="number" placeholder='enter name' />

    <select name="countries" onChange={(e)=>{
      console.log(e.target.value);
    }} id="">
      <option value="az">Azerbaijan</option>
      <option value="ru">Russian</option>
      <option value="tr">Turkey</option>
      <option value="en">Englan</option>

    </select>

    <form action="" onSubmit={(e)=>{
      e.preventDefault();
      console.log("submited");
    }}>
      <input  type="text"  placeholder='name'/>
      <button>Add</button>
    </form> */}

    </>
  )
}

export default App
