import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import tree_logo from '../imgs/tree_logo.jpg';
import wyatt from '../imgs/wyatt.jpg';
import tree_before from '../imgs/tree_before.jpg';
import tree_after from '../imgs/tree_after.jpg';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const before = () => {
        document.getElementById("before").style.backgroundColor = "greenyellow";
        document.getElementById("after").style.backgroundColor = "green";
    }

    const after = () => {
        document.getElementById("before").style.backgroundColor = "green";
        document.getElementById("after").style.backgroundColor = "greenyellow";
    }

    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>
            
            {/* NavBar */}
            <div className="navbar">
                <img className="logo" src={tree_logo} alt="logo"/>
                <h1 className="companyName">Green Belt Tree Care LLC</h1>
            </div>


            <div className="bodyWrapper">
                {/* About section */}
                <div className="aboutDiv">
                    {/* <h1 className="aboutTitle">About Us</h1> */}
                    <div className="about">
                        <p className="aboutMsg">Green Belt Tree Care is a Native American owned and operated tree care company based out of Auburn, WA. We are Licensed, Insured and Bonded. We are committed to providing top quality tree care services throughout western washington. We offer a range of services from tree trimming, tree removal, stump grinding and many more. We also offer 24 hour emergency services.</p>
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
                                <h2 onClick={before} id="before">Before</h2>
                                <h2 onClick={after} id="after">After</h2>
                            </div>
                            <img src={tree_before} alt="image_not_available" className="serviceImg"/>
                        </div>
                        <div className="service">
                            <h2 className="servTitle">Tree Removal</h2>
                            <div className="imgSlt">
                                <h2 onClick={before} id="before">Before</h2>
                                <h2 onClick={after} id="after">After</h2>
                            </div>
                            <img src={tree_before} alt="image_not_available" className="serviceImg"/>
                        </div>
                    </div>
                    <div className="serviceTypes">
                        <div className="service">
                            <h2 className="servTitle">Stump Grinding</h2>
                            <div className="imgSlt">
                                <h2 onClick={before} id="before">Before</h2>
                                <h2 onClick={after} id="after">After</h2>
                            </div>
                            <img src={tree_before} alt="image_not_available" className="serviceImg"/>
                        </div>
                        <div className="service">
                            <h2 className="servTitle">Pruning</h2>
                                <div className="imgSlt">
                                <h2 onClick={before} id="before">Before</h2>
                                <h2 onClick={after} id="after">After</h2>
                            </div>
                            <img src={tree_before} alt="image_not_available" className="serviceImg"/>
                        </div>
                    </div>
                    <Link to="/services" className="servicesLink">Click to learn more about what services we provide</Link>
                </div>
            </div>
        </div>
    )
}

export default Home