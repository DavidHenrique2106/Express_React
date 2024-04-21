import React from 'react'

import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/client">Clientes</Link>
            <Link to="/devedor" >Devedores</Link>
        </nav>
    </div>
  )
}

export default navbar