import React, {useRef, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import tree_logo from '../imgs/tree_logo.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const {submitted, setSubmitted} = useState(false);
    const navigate = useNavigate();
    const form = useRef();

    // Email JS Information
    const publicKey = "QRSJh2P5Gcmyk3Gst";
    const templateId = "template_zm3gvfh";
    const serviceId = "service_1n9bmqw";

    const goHome = () => {
        navigate("/");
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })

        navigate("/");
    }

    return (
        <div>
            <div className="navbar">
                <img className="logo" src={tree_logo} alt="logo"/>
                <h1 className="companyName">Green Belt Tree Care LLC</h1>
                <button className="homeBtn" onClick={goHome}>Home</button>
            </div>
            <div className="contactWrapper">
                <h1 className="contactTitle">Contact Us</h1>
                <p className="contactSubTitle">Fill out the form below to request a quote and we will get back to you as soon as possible. <br/>You can also give us a call at <b>206-531-6525</b>.</p>

                <div className="requestFormDiv">
                    <form className="requestForm" ref={form} onSubmit={sendEmail}>
                        <div className="formInput">
                            <label className="formLabel">Full Name:</label>
                            <input className="formInput" type="text" name="first_name"/>
                        </div>
                        <div className="formInput">
                            <label className="formLabel">Phone Number:</label>
                            <input className="formInput" type="text" name="phone_number"/>
                        </div>
                        <div className="formInput">
                            <label className="formLabel">Email:</label>
                            <input className="formInput" type="text" name="email"/>
                        </div>
                        <div className="formInput">
                            <label className="formLabel">Message:</label>
                            <textarea className="formTextarea" name="message" rows="5"></textarea>
                        </div>
                        <div className="submitDiv">
                            <input className="formSubmit" type="submit" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact