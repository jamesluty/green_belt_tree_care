import React from 'react';
import { Link } from 'react-router-dom';
import company_logo from '../imgs/company_logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={company_logo} alt="logo"/>
            <h1 className="companyName">Green Belt Tree Care LLC</h1>
            <div className="links">
                <Link to="/"><h2 className="link">Home</h2></Link>
                <Link to="/services"><h2 className="link">Services</h2></Link>
                <Link to="/contact"><h2 className="link">Contact Us</h2></Link>
            </div>
        </div>
    )
}

export default Navbar