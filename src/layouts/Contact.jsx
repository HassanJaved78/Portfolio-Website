import React from "react";
import { useState } from "react";
import "./styles/Contact.css";

export default function() {

    const [user, setUser] = useState({
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
            <h1 className="heading">Contact Me</h1>

            <div id="contact-container">
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={user.email} name="email" id="email" placeholder="Enter your email" onChange={handleChange} required />

                    <label htmlFor="subject">Subject</label>
                    <input type="text" value={user.subject} name="subject" id="subject" placeholder="What you have to say?" onChange={handleChange} required />

                    <label htmlFor="message">Your Message</label>
                    <input type="text" value={user.message} name="message" id="message" placeholder="Enter your message" onChange={handleChange} required />

                    <label htmlFor="file">Attachment</label>
                    <input type="file" name="file" id="file" />

                    <button type="submit" disabled={!user.email || !user.subject || !user.subject}>Submit</button>

                </form>

            </div>

        </div>
    )
}