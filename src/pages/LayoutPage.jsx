import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../layouts/Navbar";
import Intro from '../layouts/Intro';
import Portfolio from '../layouts/Portfolio';
import Skills from '../layouts/Skills';
import Education from '../layouts/Education';
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";
import ArrowComponent from "../components/ArrowComponent";

export default function LayoutPage() {
    return (
        <>
            <Navbar />
            <Intro />
            <Skills />
            <Education />
            <Portfolio />
            <Contact />
            <Footer />
            <ArrowComponent />
        </>
    )
}