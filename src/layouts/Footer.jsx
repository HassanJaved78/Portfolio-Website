import React from "react";
import "./styles/Footer.css";

import instagramIcon from "../assets/Social/instagram.png";
import gitIcon from "../assets/Social/github.png";
import facebookIcon from "../assets/Social/facebook.png";
import xIcon from "../assets/Social/X.png";

export default function Footer() {
    return (
        <div id="footer-section">
            <div id="contacts">
                <h3>Contact</h3>
                <p><span style={{fontWeight: 'bold', marginRight: '5px'}}>Email:</span><span>hassanjaved0554@gmail.com</span></p>
            </div>

            <div>
                <h3>Social</h3>
                <div className="links">
                    <a href="https://instagram.com" target="_blank">
                        <img src={instagramIcon} alt="instagram"/>
                        Instagram
                    </a>
                </div>

                <div className="links">
                    <a href="https://github.com" target="_blank">
                        <img src={gitIcon} alt="github"/>
                        Github
                    </a>
                </div>

                <div className="links">
                    <a href="https://facebook.com" target="_blank">
                        <img src={facebookIcon} alt="facebook"/>
                        Facebook
                    </a>
                </div>

                <div className="links">
                    <a href="https://x.com" target="_blank">
                        <img src={xIcon} alt="X"/>
                        X
                    </a>
                </div>
            </div>
        </div>
    )
}