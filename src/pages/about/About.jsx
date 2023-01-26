import "./About.css";
import Imag from "../../assets/foto.jpeg";

const About = () => {
    return (
        <div className="containerAbout">
            <p className="aboutMe">ABOUT ME</p>
            <div className="containerInfoAbout">
                <div className="containerImgAbout">
                    <img className="imgAbout" src={Imag} alt="mi imagen" />
                </div>
                <div className="containerNameAbout">
                    <h2 className="NameAbout">Francisco Casado Romero</h2>
                    <p className="AboutMe">
                        Programming is something that I am passionate about and
                        enjoy doing every day. I started four months ago in the
                        world of programming and since then I have not stopped
                        studying. I am very good at both working in a group and
                        alone.
                    </p>
                </div>
                <div className="containerSocialAbout">
                    <a href="https://github.com/CasadoFrancisco">
                        <i className="icon fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/francisco-casado-romero-283b17239/">
                        <i className="icon fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
