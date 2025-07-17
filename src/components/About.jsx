import profilePic from "../assets/pp.png";
import '../styles/about.css';

function About() {
    return (
        <section id="about" className="about-section">
            <h1 className="about-title">About Me</h1>

            <div className="about-content">
                <div className="about-image">
                    <div className="image-wrapper">
                        <img src={profilePic} alt="Yograj Rijal" />
                    </div>
                </div>
                <div className="about-text">
                    <p className="about-summary">
                        I’m <strong>Yograj Rijal</strong>, a frontend developer passionate about building responsive, user-friendly web applications. Currently, I specialize in <strong>React.js</strong> while learning <strong>Node.js</strong> and <strong>MongoDB</strong> to evolve into a full-stack developer.
                    </p>
                    <p className="about-summary">
                        My goal is to create seamless digital experiences that combine modern design with scalable backend systems.
                    </p>
                </div>
            </div>
            <div className="about-links">
            </div>
        </section>
    );
}

export default About;
