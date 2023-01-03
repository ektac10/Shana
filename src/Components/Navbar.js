import React from 'react'
import { Link } from 'react-router-dom'
import logoimg from "../logo.png"

export default function Navbar() {
    return (
<div className="headersection">
    <div className="container">
        <div className="topheader">
            <div className="logo-section">
               <Link to="/home"><img src={logoimg} /></Link>
            </div>
            <div className="main-navigation">
                <nav className="navbar navbar-expand-lg  ">
                    <Link to="/home" className="navbar-brand">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to="/about" className="nav-link" >About</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to="/blog" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Blog
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/" className="dropdown-item">Action</Link></li>
                                    <li><Link to="/" className="dropdown-item">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>

                        </ul>

                    </div>

                </nav>
            </div>
        </div>
    </div>
    </div>
    )
}
