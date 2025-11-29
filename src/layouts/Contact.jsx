import React from "react";
import "./styles/Contact.css";

export default function() {
    return (
        <div id="contact-section">
            <h1 className="heading">Contact Me</h1>

            <div id="contact-container">
                
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required />

                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="What you have to say?" required />

                    <label htmlFor="message">Your Message</label>
                    <input type="text" name="message" id="message" placeholder="Enter your message" required />

                    <label htmlFor="file">Attachment</label>
                    <input type="file" name="file" id="file" />

                    <button type="submit">Submit</button>

                </form>

            </div>

        </div>
    )
}