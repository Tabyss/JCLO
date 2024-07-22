import React from 'react'
import Logo from '../../../assets/img/JCLo.png'
import { RiShoppingBag4Line } from "react-icons/ri";

function Navbar() {
  return (
    <div className='nav'>
        <ul className='nav-left'>
            <li>Product</li>
            <li>Category</li>
        </ul>
        <img src={Logo}/>
        <ul className='nav-right'>
            <li>Login</li>
            <li><RiShoppingBag4Line size='20px'/></li>
        </ul>
    </div>
  )
}

export default Navbar