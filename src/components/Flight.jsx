import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/Flight.css";
import Homep from "../components/Homep";

const Flight = (props) => {
    const [flights, setFlights] = useState([]);

    useEffect(()=>{
        const loadFlights= async() => {
            const response = await axios.get("https://server-travel-7beg.onrender.com/api/flights");
            setFlights(response.data.slice(0,props.num));
        };

        loadFlights();
    },[]);

    return (
        <div id="flight-list" className="columns">
            {flights.map((flight)=>(
                <Homep  key={flight._id} 
                        id={flight._id}
                        name={flight.name} 
                        country={flight.country}
                        img_name={flight.img_name}
                        short_desc={flight.short_desc}
                        language={flight.language} />
            ))}
        </div>
    )
};

export default Flight;