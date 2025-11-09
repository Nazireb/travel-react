import "../css/Home.css";
import {useState} from "react";
import TravelDialog from "../components/TravelDialog"

const Homep = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const showTravelDetails = () => {
        setShowDialog(true);
    }

    const closeTravelDetails = () => {
        setShowDialog(false);
    }

    return (
        <>
            {showDialog?(
                <TravelDialog closeTravelDialog={closeTravelDetails} 
                    name={props.name} 
                    country={props.country}
                    img_name={props.img_name}
                    short_desc={props.short_desc}
                    language={props.language}
                    />
            ):("")}
            <section className="travel" onClick={showTravelDetails}>
                <img src={`https://server-travel-7beg.onrender.com/images/${props.img_name}`} alt="Flight" />
                <div className="travel-description">
                    <h1>{props.name}</h1>
                    
                </div>
            </section>
        </>
    );
};

export default Homep;