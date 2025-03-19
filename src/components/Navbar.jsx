import React, { useState } from "react";
 import pp from '../assets/pp.png'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faHome, faUser, faCode, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";
 
 
 function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false);
 
     function toggleMenu() {
         setMenuOpen(!menuOpen);
     }
 
     return (
         <header>
             <div className="logo">
                 <img src={pp} alt="Profile Picture" />
             </div>
 
             <nav>
                 <ul className={`navBar ${menuOpen ? "show" : ""}`}>
                     <li><a href="#hero" onClick={toggleMenu}><FontAwesomeIcon icon={faHome} /></a></li>
                     <li><a href="#about" onClick={toggleMenu}><FontAwesomeIcon icon={faUser} /> </a></li>
                     <li><a href="#skills" onClick={toggleMenu}><FontAwesomeIcon icon={faCode} /></a></li>
                     <li><a href="#projects" onClick={toggleMenu}><FontAwesomeIcon icon={faProjectDiagram} /> </a></li>
                     <li><a href="#contact" onClick={toggleMenu}><FontAwesomeIcon icon={faEnvelope} /></a></li>
                 </ul>
             </nav>
 
             {/* <!-- Mobile Menu Button --> */}
             <div className="menu-btn" onClick={toggleMenu}>☰</div>
         </header>
     );
 }
 
 export default Navbar;