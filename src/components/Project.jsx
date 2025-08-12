import { useEffect, useState } from "react";
import snakeImg from '../assets/snake.png';
import weatherImg from '../assets/weatherapp.png';
import calculatorImg from '../assets/calculator.png';
import hangmanImg from '../assets/hangman.png';

function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // API call
        const fetchProjects = async () => {
            const data = [
                { title: "Snake Game", link: "https://yograj47.github.io/Snake/", img: snakeImg },
                { title: "Weather App", link: "https://yograj47.github.io/Weatherapp/", img: weatherImg },
                { title: "Calculator", link: "https://yograj47.github.io/Calculator/", img: calculatorImg },
                { title: "Hangman", link: "https://yograj47.github.io/Hangman/", img: hangmanImg },
            ];
            setProjects(data);
        };

        fetchProjects();
    }, []);

    return (
        <section id="project" className="bg-gray-300/50 py-16">
            <h1 className="text-4xl font-bold text-center text-black mb-10">Projects</h1>

            <div className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                    >
                        {/* Project Image */}
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <h2 className="text-white text-lg font-semibold mb-3">{project.title}</h2>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition"
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
