import "../css/Home.css";
import {useState} from "react";
import TravelDialog from "../components/TravelDialog"

const Homep = (props) => {
    const [flight, setFlight] = useState(props);
    const [showFlight, setShowFlight] = useState(true);
    const [showDialog, setShowDialog] = useState(false);

    const showTravelDetails = () => {
        setShowDialog(true);
    }

    const closeTravelDetails = () => {
        setShowDialog(false);
    }

    const updateFlight = (flight) => {
        setFlight(flight);
    }

    const hideFlight = () => {
        setShowFlight(false);
    }

    return (
        <>
            {showDialog?(
                <TravelDialog closeTravelDialog={closeTravelDetails} 
                    _id={flight._id}
                    name={flight.name} 
                    country={flight.country}
                    img_name={flight.img_name}
                    short_desc={flight.short_desc}
                    language={flight.language}
                    updateFlight={updateFlight}
                    hideFlight={hideFlight}
                    />
            ):("")}

            {showFlight?(
            <section className="travel" onClick={showTravelDetails}>
                <img src={`https://server-travel-7beg.onrender.com/api/flights/${flight.img_name}`} alt="Flight" />
                <div className="travel-description">
                    <h1>{flight.name}</h1>
                </div>
            </section>
            ):("")}
        </>
    );
};

export default Homep;