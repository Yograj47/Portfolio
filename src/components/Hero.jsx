import pp from '../assets/pp.png'
import cv from '../assets/CV_Yograj_Rijal.pdf';
import '../styles/hero.css'

function Hero() {
    return (
        // <!-- Home -->
        <div id="hero">
            <div className="hero__content">
                <div className="hero__content__text">
                    <h1>Hello!</h1>
                    <p>I'm <span className="hero__text__name">Yograj Rijal,</span></p>
                    <p>Web Developer &</p>
                    <p>UI/UX Designer</p>
                </div>
                <div className="buttons">
                    <button onClick={(e) => {
                        e.preventDefault();
                        alert('Genric Button')
                    }}>Hire Me</button>
                    <button><a href={cv} download> Download CV</a></button>
                </div>
            </div>
            <img src={pp} height="500px" width="500px" alt="profile picture" />
        </div>

    )
}

export default Hero;