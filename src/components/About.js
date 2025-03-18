import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBirthdayCake, faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function About() {
    const [quote, setQuote] = React.useState("");
    const [author, setAuthor] = React.useState("");

    React.useEffect(() => {
        fetch("https://famous-quotes4.p.rapidapi.com/random?category=all&count=1", {
            method: "GET",
            headers: {
                "x-rapidapi-key": "95aea2d802msh2a617611cb74ff5p1a0133jsnfdf9c2c42b83",
                "x-rapidapi-host": "famous-quotes4.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(data => {
                setQuote(data[0].text);
                setAuthor(data[0].author);
            })
            .catch(error => console.error("Error fetching quote:", error));
    }, []);

    return (
        <section id="about" className="about-section">
            <h1 className="about-title">About Me</h1>
            <div className="about-container">

                {/* Quote Box */}
                <div className="quote-box">
                    <p className="quote">{quote}</p>
                    <p className="author">– {author}</p>
                </div>

                {/* Personal Information */}
                <ul className="about-info">
                    <li>
                        <FontAwesomeIcon icon={faUser} /> <span>Name:</span> Yograj Rijal
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBirthdayCake} /> <span>Age:</span> 20
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Location:</span> Kathmandu, Nepal
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} /> <span>Email:</span> yograjrijal926@gmail.com
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPhone} /> <span>Phone:</span> +977-986-0256338
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
