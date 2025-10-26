import {Link} from "react-router-dom";
import "./../css/Navigation.css";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <ul className="columns">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Destinations">Destinations</Link></li>
                <li><Link to="/Guide">Travel Guides</Link></li>
                <li><Link to="/About">About us</Link></li>
                <li><Link to="/Faq">FAQ's</Link></li>
            </ul>
        </nav>
    );
    
};

export default Navigation;