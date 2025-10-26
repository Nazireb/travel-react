import "./../css/About.css";
import aboutPic from "../images/aboutuspage.png"

const Aboutus = (props) => {
    return (
        <section className="about">
            <img src={aboutPic} alt="" />
        </section>
    );
};

export default Aboutus;