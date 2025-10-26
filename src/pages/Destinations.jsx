import "./../css/Destinations.css";
import Flight from "../components/Flight";
import paris from "../images/paris.avif";
import london from "../images/london.jpg";
import montegobay from "../images/MontegoBay.jpg";

const Destinations = () => {
    return (
        <main id="destinations" className="flight-c">
            <h2>Destinations</h2>
            <div className="columns">
                <Flight name="Paris" desc="Paris is a beautiful city known for its style, culture and charm. Its often called the City of love and is one of the most visted places in the world." img={paris}/>
                <Flight name="london" desc="London is a lively city full of history culture and modren day city life. This makes it a favrite destination from travlers around the world." img={london}/>
                <Flight name="Montego Bay" desc="A tropical island known for its beaches, regggae music. You can enjoy warm weather, delicious food and vibrant local culture." img={montegobay}/>
            </div>
        </main>
    );
};

export default Destinations;