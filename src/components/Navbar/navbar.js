import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return(
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className='container'>
                <div  className="navbar-brand" ><NavLink to='/'>React Website</NavLink></div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="nav-link" ><NavLink to='/'>Home</NavLink></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" ><NavLink to='/about'>About</NavLink></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link"><NavLink to='/contacts'>Contacts</NavLink></div>
                        </li>
                        </ul>
                    </div>  
                </div>
            </nav>     
    );
}

export default Navbar