import "./../css/Dialog.css";
import React, { useState } from "react";
import DetailsDialog from "./DetailsDialog";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";

const TravelDialog = (props) => {
    const [showContent, setShowContent] = useState("details");

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
    }

    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
    }

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
                    <div id="flight-dialog-content">
                        {showContent==="details"?(
                            <DetailsDialog
                                showEdit={showEdit}
                                showDelete={showDelete}
                                name={props.name}
                                country={props.country}
                                img_name={props.img_name}/>
                                
                        ):showContent === "edit"?(
                            <EditDialog
                                _id={props._id}
                                name={props.name}
                                img_name={props.img_name}
                                country={props.country}
                                closeEditDialog={props.closeTravelDialog}
                                updateFlight={props.updateFlight}/>
                        ):(
                            <DeleteDialog
                                _id={props._id}
                                name={props.name}
                                closeDeleteDialog={props.closeTravelDialog}
                                hideFlight={props.hideFlight}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelDialog;