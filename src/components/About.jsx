import profilePic from "../assets/cc.png";

function About() {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-blue-50 py-16" id="about">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">

                {/* Image Section */}
                <div className="relative group">
                    {/* Gradient border effect */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-400 via-purple-900 to-pink-400 opacity-50 blur-md group-hover:opacity-100 transition duration-500"></div>

                    {/* Profile Image */}
                    <img
                        src={profilePic}
                        alt="Yograj Rijal"
                        className="relative w-64 h-64 object-cover rounded-full bg-gray-100 shadow-lg transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Text Section */}
                <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-500 inline-block pb-1">
                        About Me
                    </h2>
                    <p className="text-gray-700 leading-relaxed max-w-lg">
                        Hi! I’m <span className="text-blue-600 font-semibold">Yograj Rijal</span>,
                        a frontend developer passionate about crafting clean, responsive, and engaging web experiences.
                        I specialize in <span className="bg-blue-100 px-2 py-1 rounded text-blue-700 font-medium">React.js</span>
                        while learning <span className="bg-green-100 px-2 py-1 rounded text-green-700 font-medium">Node.js</span>
                        and <span className="bg-yellow-100 px-2 py-1 rounded text-yellow-700 font-medium">MongoDB</span>
                        to grow into a full-stack developer.
                    </p>
                    <p className="text-gray-700 leading-relaxed max-w-lg">
                        My mission is to deliver digital solutions that are both visually stunning and highly functional —
                        merging modern design with scalable backend systems for a smooth user experience.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
