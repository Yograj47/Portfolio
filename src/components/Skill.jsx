import { useEffect } from "react";
import { faHtml5, faCss3Alt, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faDatabase } from "@fortawesome/free-solid-svg-icons";
import '../styles/skill.css'; // Ensure this path is correct

function Skill() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills-section">
            <h1 className="skills-title">My Skills</h1>
            <ul className="skills-list">
                <li className="skill-card"><FontAwesomeIcon icon={faHtml5} /><span>HTML</span></li>
                <li className="skill-card"><FontAwesomeIcon icon={faCss3Alt} /><span>CSS</span></li>
                <li className="skill-card"><FontAwesomeIcon icon={faReact} /><span>React</span></li>
                <li className="skill-card"><FontAwesomeIcon icon={faNodeJs} /><span>Node.js</span></li>
                <li className="skill-card"><FontAwesomeIcon icon={faLeaf} /><span>MongoDB</span></li>
                <li className="skill-card"><FontAwesomeIcon icon={faDatabase} /><span>Express.js</span></li>
                <li className="skill-card"><span className="custom-badge">TW</span><span>Tailwind CSS</span></li>
                <li className="skill-card"><span className="custom-badge">JS</span><span>JavaScript</span></li>
            </ul>
        </section>
    );
}

export default Skill;
