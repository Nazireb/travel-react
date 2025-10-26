import "./../css/Guide.css";
import Guides from "../components/Guides";

const Guide = () => {
    return (
        <main id="guide" className="main-content">
            <h2>Travel Guide</h2>
            <section className="guide-c">
                    <div>
                        <p>
                            Planning a trip can feel overwhelming but the right guidance makes it
                            easier. Our travel guide provides helpful tips, cultural insights and
                            advice to make your journey smoother. Whether you are exploring a new
                            city for the first time or returning to a favorite destination, these
                            guides are designed to help you travel smarter, save money, and enjoy
                            your experience to the absolute fullest.
                        </p>

                        <Guides />
                    </div>
                </section>

            <section id="guidess">
                <article className="card">
                    <h3>Top Tips</h3>
                    <ul>
                        <li>Paris – Learn a few basic French phrases and wear comfortable walking shoes.</li>
                        <li>Venice – Get a vaporetto pass to get around the canals easily.</li>
                        <li>London – Carry an umbrella; use contactless cards for transit.</li>
                        <li>Chicago – Watch the weather; it can change quickly.</li>
                        <li>Las Vegas – Stay hydrated and wear sunscreen.</li>
                        <li>Athens – Visit the Acropolis early/late and wear comfy shoes.</li>
                        <li>Montego Bay – Carry cash and explore beyond the resorts.</li>
                        <li>Rio de Janeiro – Visit landmarks on clear days; use Uber at night.</li>
                    </ul>
                </article>

        
                <article className="card">
                    <h3>Top Attractions</h3>
                    <ul>
                        <li>Paris – The Eiffel Tower, the Louvre, and Montmartre.</li>
                        <li>Venice – St. Mark’s Basilica, the Grand Canal, Rialto Bridge.</li>
                        <li>London – Tower Bridge, Buckingham Palace, British Museum.</li>
                        <li>Chicago – Millennium Park, Navy Pier, Willis Tower Skydeck.</li>
                        <li>Las Vegas – The Strip, Bellagio fountains, Fremont Street.</li>
                        <li>Athens – The Ancient Agora, Plaka, the Acropolis.</li>
                        <li>Montego Bay – Doctor’s Cave Beach, Rose Hall Great House, Dunn’s River Falls.</li>
                        <li>Rio de Janeiro – Christ the Redeemer, Sugarloaf Mountain, Copacabana.</li>
                    </ul>
                </article>
            
                <article className="card">
                <h3>Budgeting</h3>
                <ul>
                    <li>Paris – Local cafés are cheaper than spots near landmarks.</li>
                    <li>Venice – Avoid main squares for meals; side streets are cheaper.</li>
                    <li>London – Many museums are free; great for the budget.</li>
                    <li>Chicago – Try Chicago-style street food; affordable and authentic.</li>
                    <li>Las Vegas – Use hotel deals and free shows to save money.</li>
                    <li>Athens – Eat local street foods and use public transportation.</li>
                    <li>Montego Bay – Use route taxis, public beaches, and dine locally.</li>
                    <li>Rio de Janeiro – Use the metro and avoid overpriced beachfront areas.</li>
                </ul>
                </article>

                <article className="card">
                <h3>Cultural Etiquette</h3>
                <ul>
                    <li>Paris – Greet shopkeepers with “Bonjour” before asking questions.</li>
                    <li>Venice – Keep voices low in alleys and churches.</li>
                    <li>London – Queue patiently; taking turns matters.</li>
                    <li>Chicago – Locals are friendly; casual small talk is normal.</li>
                    <li>Las Vegas – Tipping is expected for hotel and casino staff.</li>
                    <li>Athens – Keep a moderate voice in public places.</li>
                    <li>Montego Bay – Be respectful; locals are proud of their heritage.</li>
                    <li>Rio de Janeiro – Expressiveness and light touch in conversation are common.</li>
                </ul>
                </article>
            </section>
        </main>
    );
};

export default Guide;