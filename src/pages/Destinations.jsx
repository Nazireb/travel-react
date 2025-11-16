import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/Destinations.css";
import Flight from "../components/Flight";

const Destinations = () => {
    return (
        <main id="Destinations" className="main-content">
            <h2>Destinations</h2>
            <Flight num="8" showAddButton={true}/>
        </main>
    )
};

export default Destinations;