import React from "react";

import './styles/Navbar.css';
import instagramIcon from "../assets/Social/instagram.png";
import gitIcon from "../assets/Social/github.png";
import facebookIcon from "../assets/Social/facebook.png";
import xIcon from "../assets/Social/X.png";

const Navbar = () => {
    return (
        <nav id="nav-bar">

            <section id="links">
                <a href="#portfolio-section">Portfolio</a>
                <a href="#contact-section">Contact</a>
            </section>

            <section id="socials">
                <a href="https://instagram.com" target="_blank">
                <img src={instagramIcon} alt="instagram"/>
                </a>

                <a href="https://github.com"  target="_blank">
                    <img src={gitIcon} alt="github"/>
                </a>
                <a href="https://facebook.com"  target="_blank">
                    <img src={facebookIcon} alt="facebook"/>
                </a>
                <a href="https://x.com"  target="_blank">
                    <img src={xIcon} alt="X"/>
                </a>
            </section>
            
        </nav>
    )
}

export default Navbar;