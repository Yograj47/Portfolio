import { useEffect } from "react";
import {
    faHtml5,
    faCss3Alt,
    faReact,
    faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Skill() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fadeInUp");
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll(".skill-card").forEach((card) => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const skills = [
        { icon: faHtml5, label: "HTML" },
        { icon: faCss3Alt, label: "CSS" },
        { icon: faReact, label: "React" },
        { icon: faNodeJs, label: "Node.js" },
        { icon: faLeaf, label: "MongoDB" },
        { icon: faDatabase, label: "Express.js" },
        { badge: "TW", label: "Tailwind CSS" },
        { badge: "JS", label: "JavaScript" },
    ];

    return (
        <section id="lang" className="py-12">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Skills
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="skill-card opacity-0 translate-y-3
                            flex items-center gap-2 px-4 py-2 bg-white rounded-full 
                            shadow-sm border border-gray-200 transition-all
                            hover:shadow-md hover:-translate-y-1"
                            style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                        >
                            {skill.icon ? (
                                <FontAwesomeIcon
                                    icon={skill.icon}
                                    className="text-xl text-blue-600"
                                />
                            ) : (
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                                    {skill.badge}
                                </span>
                            )}
                            <span className="text-sm font-medium text-gray-700">{skill.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
