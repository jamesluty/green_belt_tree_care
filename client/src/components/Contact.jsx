import React, {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import tree_logo from '../imgs/tree_logo.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
            <div>
                <h1 className="contactTitle">Contact Us</h1>
                <p className="contactSubTitle">Fill out the form below to request a quote and we will get back to you as soon as possible. <br/>You can also give us a call at <b>206-531-6525</b>.</p>

                <div className="requestFormDiv">
                    <form className="requestForm" ref={form} onSubmit={sendEmail}>
                        <div className="formName">
                            <div className="nameRow">
                                <label>First Name:</label>
                                <input className="nameInput" type="text" name="first_name"/>
                            </div>
                            <div className="nameRow">
                                <label>Last Name:</label>
                                <input className="nameInput" type="text" name="last_name"/>
                            </div>
                        </div>
                        <div className="formInput">
                            <label>Email:</label>
                            <input type="text" name="email"/>
                        </div>
                        <div className="formInput">
                            <label>Phone Number:</label>
                            <input type="text" name="phone_number"/>
                        </div>
                        <div className="formInput">
                            <label>Message:</label>
                            <input type="text" name="message"/>
                        </div>
                        <input type="submit" value="send"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact