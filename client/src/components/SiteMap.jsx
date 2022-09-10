import React from 'react';
import { Link } from 'react-router-dom';
import BBB_Accredited from '../imgs/BBB_Accredited.jpeg';
import yelp_logo from '../imgs/yelp-logo.png';

const SiteMap = () => {
    return (
        <div className="mapWrapper">
            <h1 className="mapTitle">Green Belt Tree Care LLC</h1>
            <hr className="mapHr"/>
            <div className="mapDiv">
                <div>
                    <h3 className="mapHeader">Site Map</h3>
                    <div>
                        <Link to="/" className="mapLink">Home</Link>
                    </div>
                    <div>
                        <Link to="/services" className="mapLink">Services</Link>
                    </div>
                    <div>
                        <Link to="contact" className="mapLink">Contact Us</Link>
                    </div>
                </div>
                <div>
                    <h3 className="mapHeader">Services Available</h3>
                    <p>Tree Trimming</p>
                    <p>Tree Pruning</p>
                    <p>Tree Removal</p>
                    <p>Stump Grinding</p>
                    <p>Cabling</p>
                </div>
                <div className="shareDiv">
                    <h3 className="mapHeader">Visit us on...</h3>
                    <div className="logosDiv">
                        <a href="https://www.yelp.com/biz/green-belt-tree-care-auburn"><img src={yelp_logo} alt="logo_unavailable" className="socialLogo"/></a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <img src={BBB_Accredited} alt="image_unavailable"  className="bbbImg"/>
                <h1 className="emergencyService">24 Hour Emergency Service</h1>
            </div>
        </div>
    )
}

export default SiteMap