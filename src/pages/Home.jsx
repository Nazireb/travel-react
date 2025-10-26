import "./../css/Home.css";
import Homep from "../components/Homep";

const Home = () => {
    return (
        <main id="homer" className="home-c">
            <div className="columns">
                <Homep name="City" desc="Attractions, food and local vibe."/>
                <Homep name="City" desc="Attractions, food and local vibe."/>
                <Homep name="City" desc="Attractions, food and local vibe."/>
            </div>

            <div className="columns">
                <Homep name="Trending now" desc="Attractions, food and local vibe."/>
                <Homep name="Trending now" desc="Attractions, food and local vibe."/>
                <Homep name="Trending now" desc="Attractions, food and local vibe."/>
                <Homep name="Trending now" desc="Attractions, food and local vibe."/>
            </div>

            <div className="columns">
                <Homep name="Hotels" desc="Find top rated places to stay."/>
                <Homep name="Flights" desc="Comparre prices book easily."/>
                <Homep name="Guides" desc="Expplore culture and hidden gems."/>
            </div>
            <section>
                <h4>Plan Smarter. Travel Better.</h4>
                <p>Discover guides, ideas, and tools to make every trip unforgettable.</p>
            </section>
        </main>
    )
};

export default Home;