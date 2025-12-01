import React from "react";
import { useState } from "react";
import "./styles/Contact.css";

export default function() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }))

        console.log(user);
    }

    const clearForm = () => {
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Response Submitted");
        clearForm();
    }
 
    return (
        <div id="contact-section">

            <div id="contact-container">

                <div id="left-contact">
                    <h1 className="heading">Contact Me</h1>

                    <div id="form-container">
                        
                        <form onSubmit={handleSubmit}>

                            <input type="text" name="firstName" id="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} required />

                            <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} required />

                            {/* <label htmlFor="email">Email</label> */}
                            <input type="email" value={user.email} name="email" id="email" placeholder="Enter your email" onChange={handleChange} required />

                            {/* <label htmlFor="subject">Subject</label> */}
                            <input type="text" value={user.subject} name="subject" id="subject" placeholder="What you have to say?" onChange={handleChange} required />

                            {/* <label htmlFor="message">Your Message</label> */}
                            <textarea type="textarea" value={user.message} name="message" id="message" placeholder="Enter your message" onChange={handleChange} rows={4} required> </textarea>

                            {/* <label htmlFor="file">Attachment</label> */}
                            <input type="file" name="file" id="file" />

                            <button type="submit" disabled={!user.firstName || !user.lastName || !user.email || !user.subject || !user.message}>Submit</button>
                        </form>

                    </div>
                </div>

                <div id="right-contact">
                    <h1>Let's talk about everything.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates eaque tenetur iste debitis qui itaque dolorem. Sequi ducimus commodi ullam impedit! Aperiam corrupti dolore consequatur laboriosam debitis veniam repudiandae!</p>
                </div>

            </div>
        </div>
    )
}