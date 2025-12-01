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

    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    function validateField(name, value) {
        let error = "";

        if(!value) {
            error = `${name} is required`;
        }
        else {
            if (name === "email") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    error = 'Invalid email address';
                }
            }
        }

        if(name === "subject" || name === "message") {
            if(value.trim().length < 20) {
                error = `${name} must have atleast 20 characters`;
            }
            
        }

        setError(prevError => ({
            ...prevError,
            [name] : error
        }))

        // console.log(error);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }))

        // console.log(user);

        validateField(name, value);
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

        let formIsValid = true;
        Object.keys(user).forEach(key => {
            validateField(key, user[key]);

            if (!user[key] || error[key]){
                formIsValid = false;
            }
        })

        if(!formIsValid) return;

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

                            <input type="text" name="firstName" id="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange}  />

                            <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange}  />
                            {error.firstName &&
                                <p className="error">{error.firstName}</p>
                            }
                            
                            {error.lastName &&
                                <p id="lastname-error" className="error">{error.lastName}</p>
                            }

                            {/* <label htmlFor="email">Email</label> */}
                            <input type="email" value={user.email} name="email" id="email" placeholder="Enter your email" onChange={handleChange}  />
                            {error.email &&
                                <p className="error">{error.email}</p>
                            }

                            {/* <label htmlFor="subject">Subject</label> */}
                            <input type="text" value={user.subject} name="subject" id="subject" placeholder="What you have to say?" onChange={handleChange}  />
                            {error.subject &&
                                <p className="error">{error.subject}</p>
                            }
                            
                            {/* <label htmlFor="message">Your Message</label> */}
                            <textarea type="textarea" value={user.message} name="message" id="message" placeholder="Enter your message" onChange={handleChange} rows={4} > </textarea>
                            {error.message &&
                                <p className="error">{error.message}</p>
                            }

                            {/* <label htmlFor="file">Attachment</label> */}
                            <input type="file" name="file" id="file" />

                            <button type="submit">Submit</button>
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