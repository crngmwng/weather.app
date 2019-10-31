import React from 'react';
import './navbar.css'

const Navbar = () => {
    return(
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className='container'>
                <a  className="navbar-brand" href="/">React Website</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacts">Contacts</a>
                        </li>
                        </ul>
                    </div>  
                </div>
            </nav>     
    );
}

export default Navbar