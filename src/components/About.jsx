import profilePic from "../assets/pp.png";
import '../styles/about.css';

function About() {
    return (
        <section id="about" className="about-section">
            <h1 className="about-title">About Me</h1>

            <div className="about-content">
                <div className="about-image">
                    <img src={profilePic} alt="Yograj Rijal" />
                </div>
                <div className="about-text">
                    <p className="about-summary">
                        I’m <strong>Yograj Rijal</strong>, a frontend developer passionate about crafting responsive, intuitive, and user-friendly web applications. I enjoy transforming ideas into seamless digital experiences using modern technologies.
                    </p>
                    <p className="about-summary">
                        Currently, I’m focused on building advanced frontend applications using <strong>React.js</strong>. At the same time, I’m expanding my backend knowledge by working with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>, aiming to become a skilled full-stack developer.
                    </p>
                    <p className="about-summary">
                        My long-term goal is to deliver complete, scalable, and efficient web solutions that blend both frontend creativity and backend reliability.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
