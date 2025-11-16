import "./../css/Home.css";
import Slideshow from "../components/Slideshow";
import Flight from "../components/Flight";

const Home = () => {
    return (
        <main id="homer" className="home-c">
            <h1>Your journey begins here — explore, plan, and travel the world with GlobalWay.</h1>
            <Slideshow />
            <div className="columns">
                <Flight num={3}/>
            </div>

            <div className="columns">
                <h1>Trending now</h1>
                <Flight num={4}/>
            </div>

            <div className="columns">
             
            </div>
            <section>
                <h4>Plan Smarter. Travel Better.</h4>
                <p>Discover guides, ideas, and tools to make every trip unforgettable.</p>
            </section>
        </main>
    )
};

export default Home;