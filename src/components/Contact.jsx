import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"

function Contact() {
    return (
        // <!-- Contact Section -->
        <div id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    {/* <!-- Contact Info --> */}
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p><FontAwesomeIcon icon={faEnvelope} />yograjrijal926@email.com</p>
                        <p><FontAwesomeIcon icon={faPhone} />+977-9860256338</p>
                        <p><FontAwesomeIcon icon={faLocationDot} />Kathmandu, Nepal</p>

                        {/* <!-- Social Links --> */}
                        <div className="social-links">
                            <a href="https://github.com/Yograj47" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/yograj-rijal-b84893374/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>

                    {/* <!-- Contact Form --> */}
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="text" placeholder="Subject" required />
                            <textarea placeholder="Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;