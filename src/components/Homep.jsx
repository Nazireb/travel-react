import "./../css/Home.css";
import homePic from "../images/paris.avif"

const Homep = (props) => {
    return (
        <section className="home">
            <h1>{props.name}</h1>
            <img src={homePic} alt="" />
            <p>{props.desc}</p>
        </section>
    );
};

export default Homep;