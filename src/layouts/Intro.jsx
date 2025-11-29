import React from "react";
import './styles/Intro.css'

import Image from '../assets/image.avif'

const Intro = () => {
    return (
        <div id="intro-section">
            <div id="name">
                <h1>Hassan Javed</h1>
                <h1>Software Engineer</h1>
                <h1>Based in Pakistan</h1>
            </div>
            
            <div id="main-container">
                <div id="right" className="flex-container">
                    <section>
                        <h3 className="headings">Education</h3>
                        <p className="text">Work for money and design for love!</p>
                        <p className="text">I am Hassan, a software engineering student with deep passion for learning</p>
                    </section>

                    <section>
                        <h3 className="headings">Contact</h3>
                        <p className="text">Taxila, Pakistan</p>
                        <p className="text">hassanjaved0554@gmail.com</p>
                        <p className="text">+92 318 9229126</p>
                    </section>

                    <section>
                        <h3 className="headings">Services</h3>
                        <p className="text">Website Development</p>
                        <p className="text">Game Development</p>
                    </section>
                </div>

                <div id="center" className="flex-container">
                    <div id="image-wrapper">
                        <img src={Image} alt="" />
                    </div>
                </div>


                <div id="left" className="flex-container">
                    <section>
                        <h3 className="headings">Years of experience</h3>
                        <p className="text">1</p>
                    </section>

                    <section>
                        <h3 className="headings">Satisfaction Client</h3>
                        <p className="text">100%</p>
                    </section>

                    <section>
                        <h3 className="headings">Clients Worldwide</h3>
                        <p className="text">5</p>
                    </section>

                    <section>
                        <h3 className="headings">Projects Done</h3>
                        <p className="text">25</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Intro;