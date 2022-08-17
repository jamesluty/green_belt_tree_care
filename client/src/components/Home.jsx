import React from 'react';
import { Link } from 'react-router-dom';
import tree_logo from '../imgs/tree_logo.jpg';
import wyatt from '../imgs/wyatt.jpg';

const Home = () => {
    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>
            
            {/* Title bar */}
            <div className="navbar">
                <div className="title">
                    <img className="logo" src={tree_logo} alt="logo"/>
                    <h1 className="companyName">Green Belt Tree Care LLC</h1>
                </div>
            </div>

            {/* About section */}
            <div className="aboutWrapper">
                <div className="aboutDiv">
                    <h1 className="aboutTitle">About Us</h1>
                    <div className="about">
                        <p className="aboutMsg">Green Belt Tree Care is a minority owned and operated tree care company based out of Auburn, WA. Licensed and Bonded. We are committed to providing top quality tree care services throughout western washington. We offer a range of services from tree trimming, tree removal, stump grinding and many more. We also offer 24 hour emergency services.</p>
                        <img src={wyatt} alt="image_not_found" className="aboutImg"/>
                    </div>
                </div>
                <hr />

                {/* Contact section */}
                <div className="contactDiv">
                    <p className="contactInfo">To request a free quote please contact us at 206-531-6525 or <Link to="/contact" className="contactMsg">send us a messge.</Link></p>
                </div>
                <hr />

                {/* Service section */}
                <div className="servicesDiv">
                    <h1 className="servicesTitle">Services We Provide</h1>
                    <div className="serviceTypes">
                        <div className="service">
                            <h2 className="servTitle">Tree Trimming</h2>
                            <div className="imgSlt">
                            <h2 className="before">Before</h2>
                                <hr />
                                <h2 className="after">After</h2>
                            </div>
                            <img src="" alt="" className="serviceImg"/>
                        </div>
                        <div className="service">
                            <h2 className="servTitle">Tree Removal</h2>
                            <div className="imgSlt">
                            <h2 className="before">Before</h2>
                                <hr />
                                <h2 className="after">After</h2>
                            </div>
                            <img src="" alt="" className="serviceImg"/>
                        </div>
                    </div>
                    <div className="serviceTypes">
                        <div className="service">
                            <h2 className="servTitle">Stump Grinding</h2>
                            <div className="imgSlt">
                            <h2 className="before">Before</h2>
                                <hr />
                                <h2 className="after">After</h2>
                            </div>
                            <img src="" alt="" className="serviceImg"/>
                        </div>
                        <div className="service">
                            <h2 className="servTitle">Pruning</h2>
                            <div className="imgSlt">
                                <h2 className="before">Before</h2>
                                <hr />
                                <h2 className="after">After</h2>
                            </div>
                            <img src="" alt="" className="serviceImg"/>
                        </div>
                    </div>
                    <Link to="/services" className="servicesLink">Learn more about what services we provide</Link>
                </div>
            </div>
        </div>
    )
}

export default Home