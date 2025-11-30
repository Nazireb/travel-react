import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/Flight.css";
import Homep from "../components/Homep";
import AddFlight from "./AddFlight";

const Flight = (props) => {
    const [flights, setFlights] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        setShowAddDialog(false);
    }

    const updateFlights = (flight) => {
        setFlights((flights)=>[...flights, flight]);
    }

    useEffect(()=>{
        const loadFlights= async() => {
            const response = await axios.get("https://server-travel-7beg.onrender.com/api/flights");
            setFlights(response.data.slice(0,props.num));
        };

        loadFlights();
    },[]);

    const showAdd = props.showAddButton === true;

        return (
            <>
                <button id="add-flight" onClick={openAddDialog}>+</button>

                {showAddDialog?(<AddFlight
                    closeAddDialog={closeAddDialog}
                    updateFlights={updateFlights}
                    /> ): ("")}
        
        <div id="flight-list" className="columns">
            {flights.map((flight)=>(
                <Homep  key={flight._id} 
                        _id={flight._id}
                        name={flight.name} 
                        country={flight.country}
                        img_name={flight.img_name}
                        short_desc={flight.short_desc}
                        language={flight.language} />
            ))}
        </div>
        </>
    )
};

export default Flight;