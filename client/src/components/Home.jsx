import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import wyatt from '../imgs/wyatt.jpg';
import tree_before from '../imgs/tree_before.jpg';
import tree_after from '../imgs/tree_after.jpg';
import forest_pic from '../imgs/forest_pic.jpg'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <div>
            {/* Sticky button link to contact page */}
            <Link to="/contact" className="contactLink"><h3 className="contactBtn">Contact Us</h3></Link>

            <div className="bodyWrapper">
                {/* Image Carousel */}
                <div className="mainImg">
                    <img src={forest_pic} alt="tree_pic" className="forest"/>
                </div>

                {/* Header/Slogan */}
                <div className="sloganDiv">
                    <h1 className="slogan">Green Belt Tree Care has been servicing Western Washington since 2020.</h1>
                    <h1 className="slogan">We'll go out on a limb for you.</h1>
                </div>
                <hr />

                {/* About section */}
                <div className="aboutDiv">
                    <h1 className="aboutTitle">About Us</h1>
                    <div className="about">
                        <p className="aboutMsg">Green Belt Tree Care is a Native American owned and operated tree care company based out of Auburn, WA. We are Licensed, Insured and Bonded. We are committed to providing top quality tree care services throughout western washington. We offer a range of services from tree trimming, tree removal, stump grinding and many more. We also offer 24 hour emergency services.</p>
                        <img src={wyatt} alt="image_not_found" className="aboutImg"/>
                    </div>
                </div>
                <hr />

                {/* Tree Maintenance */}
                <div className="maintenanceDiv">
                    <h1 className="maintenanceTitle">Why is Tree Maintenance so Important?</h1>
                    <p className="maintenanceDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <hr />

                {/* Contact section */}
                <div className="contactDiv">
                    <p className="contactInfo">To request a free quote please contact us at 206-531-6525 or <Link to="/contact" className="contactMsg">send us a messge.</Link></p>
                </div>
                <hr />

                {/* Service section */}
                <div className="servicesDiv">
                    <h1 className="servicesTitle">See the difference we can make</h1>
                    <div className="serviceTypes">
                        <div className="service">
                            <h2 className="servTitle">Tree Trimming</h2>
                            {/* <div className="imgSlt">
                                <h2 onClick={before} id="before">Before</h2>
                                <h2 onClick={after} id="after">After</h2>
                            </div> */}
                            <img src={tree_before} alt="image_not_available" className="serviceImg"/>
                        </div>
                        <div className="service">
                            <h2 className="servTitle">Tree Removal</h2>
                            {/* <div className="imgSlt">
                                <h2 onClick={before} id="before">Before</h2>
                                <h2 onClick={after} id="after">After</h2>
                            </div> */}
                            <img src={tree_before} alt="image_not_available" className="serviceImg"/>
                        </div>
                    </div>
                    <div className="serviceTypes">
                        <div className="service">
                            <h2 className="servTitle">Stump Grinding</h2>
                            {/* <div className="imgSlt">
                                <h2 onClick={before} id="before">Before</h2>
                                <h2 onClick={after} id="after">After</h2>
                            </div> */}
                            <img src={tree_before} alt="image_not_available" className="serviceImg"/>
                        </div>
                        <div className="service">
                            <h2 className="servTitle">Tree Pruning</h2>
                                {/* <div className="imgSlt">
                                <h2 onClick={before} id="before">Before</h2>
                                <h2 onClick={after} id="after">After</h2>
                            </div> */}
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