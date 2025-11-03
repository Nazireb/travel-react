import "./../css/About.css";
import Aboutus from "../components/Aboutus";
import Contact from "../components/Contact";

const About = () => {
    return (
        <main id="about" className="main-content">
            <div className="aboutus">
                <Aboutus />
            </div>
            <section>
                <h1>About Us</h1>
                <p>GlobalWay was created to make travel planning easier and more enjoyable. We believe that exploring new destinations should be exciting, not stressful. Our platform provides clear, simple guides and resources so travelers can focus on the experience, not the hassle.</p>
            </section>

            <section>
                <h1>Our Mission</h1>
                <p>Our mission is to connect people with the world by giving them the tools they need to travel smarter. We aim to inspire confidence, encourage cultural understanding, and help travelers make lasting memories wherever they go.</p>
            </section>
            <Contact />
        </main>
        
    );
};

export default About;