import React from 'react';
import company_logo from '../imgs/company_logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={company_logo} alt="logo"/>
            <h1 className="companyName">Green Belt Tree Care LLC</h1>
        </div>
    )
}

export default Navbar