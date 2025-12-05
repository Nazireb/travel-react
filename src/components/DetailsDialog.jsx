const DetailsDialog = (props) => {

    return (
        <div className="columns">
            <img src={`https://server-travel-7beg.onrender.com/images/${props.img_name}`} alt="flight" />
            <div id="dialog-content">
                <div  className="columns">
                            <h3>{props.name}</h3>
                            <section id="edit-links">
                                <a href="edit-link" onClick={props.showEdit}>&#9998;</a>
                                <a href="delete-link" onClick={props.showDelete}>&#x2715;</a>
                            </section>
                        </div>
                <p>{props.country}</p>
            </div>
        </div>

    );
};

export default DetailsDialog;