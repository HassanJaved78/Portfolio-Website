import React from "react";
import "./styles/Education.css";

const Education = () => {
    return (
        <div id="education-section">
            <h1 className="heading">Education & Experience</h1>

            <div id="education-container">
                <div className="section">
                    <h3 className="time-heading">2022-2024</h3>
                    
                    <p className="name">JavaScript Essentials</p>
                    <p className="place">IBM</p>

                    <p className="name">Meta React Beginner Certificate</p>
                    <p className="place">Meta</p>

                    <p className="name">Meta React Advanced Certificate</p>
                    <p className="place">Meta</p>

                    <p className="name">Backend Development using NodeJS</p>
                    <p className="place">IBM</p>
                </div>

                <div className="section">
                    <h3 className="time-heading">2025</h3>
                    
                    <p className="name">React Frontend Internship</p>
                    <p className="place">Glaxit</p>

                    <p className="name">React Frontend Internship</p>
                    <p className="place">TMR Consulting Islamabad</p>
                </div>

                <div className="section">
                    <h3 className="time-heading">2026</h3>
                    
                    <p className="name">Bachelors of Software Engineering</p>
                    <p className="place">HITEC University, Taxila</p>
                </div>
            </div>
        </div>
    )
}

export default Education;