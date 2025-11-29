import React from "react";
import "./styles/Footer.css";

import instagramIcon from "../assets/Social/instagram.png";
import gitIcon from "../assets/Social/github.png";
import facebookIcon from "../assets/Social/facebook.png";
import xIcon from "../assets/Social/X.png";

export default function Footer() {
    return (
        <div id="footer-section">
            <h1>Let's Connect</h1>
            <p>Fell free to contact with me anytime. I will try my best to get back to you as soon as i can.</p>
            
            <div id="footer-links">
                <a href="#">About me</a>
                <div className="dash"></div>
                <a href="#">Products</a>
                <div className="dash"></div>
                <a href="#">Blogs</a>
                <div className="dash"></div>
                <a href="#">Contact me</a>
            </div>
            
            <hr />
            

            <div id="contacts">
                <p><span style={{fontWeight: 'bold', marginRight: '5px'}}>Email:</span><span>hassanjaved0554@gmail.com</span></p>
            </div>
        
            <div id="footer-bottom">
                <span>Created By Hassan Javed</span>

                <span id="links-span">
                    <div className="links">
                        <a href="https://instagram.com" target="_blank">
                            <img src={instagramIcon} alt="instagram"/>
                        </a>
                    </div>

                    <div className="links">
                        <a href="https://github.com" target="_blank">
                            <img src={gitIcon} alt="github"/>
                        </a>
                    </div>

                    <div className="links">
                        <a href="https://facebook.com" target="_blank">
                            <img src={facebookIcon} alt="facebook"/>
                        </a>
                    </div>

                    <div className="links">
                        <a href="https://x.com" target="_blank">
                            <img src={xIcon} alt="X"/>
                        </a>
                    </div> 
                </span>
                
            </div>
        </div>
    )
}