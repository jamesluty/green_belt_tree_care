import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';

const Raising = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div>
                <h1 className="serviceTitle">Professional Crown Raising Service</h1>

                <div className="serviceSection">
                    <div className="serviceLeft">
                        <h2>What is crown raising?</h2>
                    </div>
                    <div className="serviceRight">
                        <Services />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Raising