import React from 'react'
import './Navbar.css'


function Navbar() {

  return (
    <nav className="navigation">
    <div className="logo">Code<strong>pen.io</strong></div>
    <div className={`openMenu` } ><i className="fa fa-bars"></i></div>
    <ul className={`mainMenu `}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
    </ul>
</nav>
  )
}

export default Navbar