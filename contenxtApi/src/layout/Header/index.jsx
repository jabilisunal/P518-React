import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const Header = () => {
  return (
    <nav>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/basket"}>Basket</Link></li>
            <li><Link to={"/wishlist"}>Wishlist</Link></li>
        </ul>
    </nav>
  )
}

export default Header
