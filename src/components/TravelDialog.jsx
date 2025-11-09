import "./../css/Dialog.css";

const TravelDialog = (props) => {
    return (
        <div id="travel-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeTravelDialog}
                    >
                        &times;
                    </span>
                    <div className="columns">
                        <img src={"https://server-travel-7beg.onrender.com/images/" + props.img_name} alt="Flight" />
                        <div id="dialog-content">
                            <h3>{props.name}</h3>
                            <p>{props.country}</p>
                            <p>{props.short_desc}</p>
                            <p>{props.language}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelDialog;