import React from "react";
import "./styles/Skills.css";

import ReactLogo from "../assets/Apps Logo/react.svg";
import FigmaIcon from "../assets/Apps Logo/figma.png";
import NodeIcon from "../assets/Apps Logo/nodejs.png";
import MongoIcon from "../assets/Apps Logo/mongodb.svg";
import JavaIcon from "../assets/Apps Logo/java.png";

const Skills = () => {
    return (
        <div id="skill-section">
            <h1 className="heading">My Skills</h1>
            <div id="skill-container">
                <div className="outer-container">
                    <div className="inner-container">
                        <img src={FigmaIcon} alt="figma" className="logo" />
                        <p className="text">80%</p>
                    </div>
                    <p className="name">Figma</p>
                </div>

                <div className="outer-container">
                    <div className="inner-container">
                        <img src={ReactLogo} alt="react" className="logo" />
                        <p className="text">80%</p>
                    </div>
                    <p className="name">React</p>
                </div>

                <div className="outer-container">
                    <div className="inner-container">
                        <img src={NodeIcon} alt="node" className="logo" />
                        <p className="text">80%</p>
                    </div>
                    <p className="name">NodeJs</p>
                </div>

                <div className="outer-container">
                    <div className="inner-container">
                        <img src={MongoIcon} alt="mongodb" className="logo" />
                        <p className="text">80%</p>
                    </div>
                    <p className="name">MongoDB</p>
                </div>

                <div className="outer-container">
                    <div className="inner-container">
                        <img src={JavaIcon} alt="java" className="logo" />
                        <p className="text">80%</p>
                    </div>
                    <p className="name">Java</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;