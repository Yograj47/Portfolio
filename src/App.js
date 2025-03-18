import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero.js'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Project from './components/Project.js'
import Contact from './components/Contact.js'

export default function App() {
    return (
        <>
        <Navbar />
        <div className="container">
            <Hero/>
            <About/>
            <Skills/>
            <Project/>
            <Contact/>       
        </div>
        </>

    );
}