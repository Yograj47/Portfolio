import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import "./styles/style.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
    </>
  );
}
