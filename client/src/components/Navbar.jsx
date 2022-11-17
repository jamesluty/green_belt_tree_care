import React from 'react';
import { Link } from 'react-router-dom';
import company_logo from '../imgs/company_logo.png';

const Navbar = () => {
    const showDropdown = () => {
        document.getElementById("dropdown").style.display = "block";
    }

    const hideDropdown = () => {
        document.getElementById("dropdown").style.display = "none";
    }

    return (
        <div className="navbar">
            <img className="logo" src={company_logo} alt="logo"/>
            <h1 className="companyName">Green Belt Tree Care LLC</h1>
            <div className="links">
                <Link to="/" className="link"><h2 className="link">Home</h2></Link>
                <div onMouseOver={showDropdown} onMouseOut={hideDropdown}>
                    <Link to="/services" className="link"><h2 className="link">Services</h2></Link>
                    <div id="dropdown">
                        <ul className="serviceDropdown">
                            <li className="dropdownItem">Tree Trimming</li>
                            <li className="dropdownItem">Ornamental Pruning</li>
                        </ul>
                    </div>
                </div>
                <Link to="/contact" className="link"><h2 className="link">Contact Us</h2></Link>
            </div>
        </div>
    )
}

export default Navbar