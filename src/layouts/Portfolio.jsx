import React from "react";
import "./styles/Portfolio.css";

import CoffeeShop from "../assets/Website Images/coffee shop website.avif";
import Flatastic from "../assets/Website Images/flatastic website.webp";
import Molla from "../assets/Website Images/Molla website.jpg";
import PortfolioWeb from "../assets/Website Images/portfolio website.avif";

const Portfolio = () => {
    return (
        <div id="portfolio-section">
            <h1 className="heading">My Latest</h1>

            <div id="portfolio-container">
                <div className="project-container">
                    <img src={CoffeeShop} alt="coffee shop" className="project-image" />
                    <p className="name">Coffee Shop Website</p>
                </div>

                <div className="project-container">
                    <img src={Flatastic} alt="flatastic" className="project-image" />
                    <p className="name">Flatastic Website</p>
                </div>

                <div className="project-container">
                    <img src={Molla} alt="molla" className="project-image" />
                    <p className="name">Molla Website</p>
                </div>

                <div className="project-container">
                    <img src={PortfolioWeb} alt="portfolio" className="project-image" />
                    <p className="name">Portfolio Website</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;