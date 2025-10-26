import "./../css/Flight.css";

const Flight = (props) => {
    return (
        <section className="flight">
            <h1>{props.name}</h1>
            <img src={props.img} alt="paris" />
            <p>{props.desc}</p>

        </section>
    );
};

export default Flight;