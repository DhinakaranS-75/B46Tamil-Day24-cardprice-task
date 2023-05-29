import React from 'react'
import './Navbar.css'
import Product from '../Product';

function Navbar() {
  return (
    <div>
      <div class="navbar">
        <h3 className='logo'>Start Bootstarp</h3>
        <a href="#home">Home</a>
        <a href="#news">About</a>
        <div class="dropdown">
          <button class="dropbtn">Shop 
          <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
          <a href="#">All Products</a>
          <hr />
          <a href="#">Popular Items</a>
          <a href="#">New Arrivals</a>
          </div>
        </div> 
        <button className="btn" type="submit">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          Cart
          <span >0</span>
        </button>
      </div>
      
    </div>
  )
}

export default Navbar
