import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div  className="Navbar">
        <div className="devedor">
        <Link className='devedor' to='/devedor'>Devedores</Link> 
        </div>

        <div className="clientes">
        <Link className='clientes' to='/client'>Meus clientes</Link>
        </div>
       
    </div>
  )
}

export default Navbar