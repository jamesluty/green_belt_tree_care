import React from 'react';
import { Link } from 'react-router-dom';
import yelp_logo from '../imgs/yelp-logo.png';
import insta_logo from '../imgs/insta-logo.png';
import isa_member from '../imgs/isa_member.png';

const SiteMap = () => {
    return (
        <div className="mapWrapper">
            {/* Site Map Header */}
            <h1 className="mapTitle">Green Belt Tree Care LLC</h1>
            <h2>Servicing Western Washington Since 2020</h2>
            <hr className="mapHr"/>

            {/* Site Map Body */}
            <div className="mapDiv">
                <div className="isaImgDiv">
                    <img src={isa_member} alt="isa_member" className="isaImg"/>
                </div>
                <div className="mapDetailDiv">
                    <div className="mapDiv">
                        <div>
                            <h3 className="mapHeader">Company</h3>
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
                                <a href="https://www.yelp.com/biz/green-belt-tree-care-auburn"><img src={yelp_logo} alt="yelp" className="yelpLogo"/></a>
                                <a href="https://www.instagram.com/greenbelttreecare/"><img src={insta_logo} alt="instagram" className="instaLogo"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        {/* <img src={BBB_Accredited} alt="image_unavailable"  className="bbbImg"/> */}
                        <h1 className="emergencyService">24 Hour Emergency Service</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteMap