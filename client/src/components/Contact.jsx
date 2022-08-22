import React, {useRef} from 'react'
import tree_logo from '../imgs/tree_logo.jpg'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const publicKey = "QRSJh2P5Gcmyk3Gst"
    const templateId = "template_zm3gvfh"
    const serviceId = "service_1n9bmqw"
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    }
    return (
        <div>
            <div className="navbar">
                <img className="logo" src={tree_logo} alt="logo"/>
                <h1 className="companyName">Green Belt Tree Care LLC</h1>
            </div>
            <div className="contactHeader">
                <h1 className="contactTitle">Contact Us</h1>
                <p>Fill out the form below to request a quote and we will get back to you as soon as possible. You can also give us a call at <span>206-531-6525</span>.</p>
            </div>
            <div className="requestFormDiv">
                    <form className="requestForm" ref={form} onSubmit={sendEmail}>
                        <label>Full Name:</label>
                        <input type="text" name="from_name"/>
                        <label>Email:</label>
                        <input type="text" name="email"/>
                        <label>Phone Number:</label>
                        <input type="text" name="phone_number"/>
                        <label>Message to send:</label>
                        <input type="text" name="message"/>
                        <input type="submit" value="send"/>
                    </form>
            </div>
        </div>
    )
}

export default Contact