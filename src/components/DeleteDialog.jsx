import React, { useState } from "react"

const DeleteDialog = (props) => {
    const [result, setResult] = useState("");

    const deleteFlight = async() => {
        const response = await fetch(`http://localhost:3001/api/flights/${props._id}`, {
            method:"DELETE"
        });

        if(response.status === 200) {
            setResult("Flight successfully delete");
            props.closeDeleteDialog();
            props.hideFlight();
        } else {
            setResult("Sorry, we couldn't delete the flight");
        }

    };

    return (
        <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteFlight}>Yes</button>
            </section>
            <span>{result}</span>
        </div>
    );
};

export default DeleteDialog;