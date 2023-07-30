import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item active ms-3">
                    <Link className="nav-link" to="/adduser">Adduser </Link>
                </li>
                <li className="nav-item ms-3">
                    <Link className="nav-link" to="/getusers">GetUsers</Link>
                </li>
                <li className="nav-item ms-3">
                    <Link className="nav-link" to="/updateuser">UpdateUsers</Link>
                </li>
               
            </ul>
           
        </div>
    </nav>
  )
}

export default Navbar