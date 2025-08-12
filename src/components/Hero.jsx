import pp from '../assets/pp.jpg';
import cv from '../assets/CV_Yograj_Rijal.pdf';
import Typewriter from 'typewriter-effect';

function Hero() {
    return (
        <section
            id="home"
            className="relative w-full h-[500px] md:h-[600px] bg-center bg-cover flex items-center justify-center"
            style={{
                backgroundImage: `url(${pp})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-sky-800/80 to-black/10"></div>

            {/* Content */}
            <div className="relative text-center text-white px-4">
                <p className="text-xl md:text-3xl mb-3">
                    Hello! I'm <span className="text-blue-300 font-semibold">Yograj Rijal</span>
                </p>

                {/* Typewriter Effect */}
                <div className="text-2xl md:text-4xl font-medium mb-6">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Web Developer')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('UI/UX Designer')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('Creative Thinker')
                                .pauseFor(2000)
                                .deleteAll()
                                .start();
                        }}
                    />
                </div>

                {/* Download CV Button */}
                <a
                    href={cv}
                    download
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg"
                >
                    Download CV
                </a>
            </div>
        </section>
    );
}

export default Hero;
