import '../styles/project.css';
function Project() {
    const projects = [
        { title: "Snake Game", link: "https://yograj47.github.io/Snake/" },
        { title: "Weather App", link: "https://yograj47.github.io/Weatherapp/" },
        { title: "Calculator", link: "https://yograj47.github.io/Calculator/" },
        { title: "Hangman", link: "https://yograj47.github.io/Hangman/" },
    ];

    return (
        <section id="projects" className="projects-section">
            <h1 className="projects-title">Projects</h1>
            <div className="project_box">
                {projects.map((project, index) => (
                    <div className="item" key={index}>
                        <div className="box"></div>
                        <div className="text">
                            <h2>{project.title}</h2>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn"
                                aria-label={`Open ${project.title}`}
                            >
                                Open
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
