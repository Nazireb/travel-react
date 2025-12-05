import React, { useState } from "react";

const EditDailog = (props) => {

    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("https://server-travel-7beg.onrender.com/images/" + props.img_name);

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("... sending");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch(`https://server-travel-7beg.onrender.com/api/flights/${props._id}`,{
            method:"PUT",
            body:formData
        });

        if(response.status === 200) {
            setResult("Flight updated successfully");
            event.target.reset();
            props.closeEditDialog();
            props.updateFlight(await response.json());
        } else {
            setResult("Error editing flight");
        }
    };

    return (
       <form id="edit-airline-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name ">Country:</label>
              <input
                type="text"
                id="name"
                name="country"
                defaultValue={props.country}
                required
              />
            </p>
            <p>
              <label htmlFor="size">Airline Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={props.name}
                required
              />
            </p>

            <section>
                    <div>
                        <p id="img-prev-section">
                            {prevSrc!=""?
                            (<img id="img-prev" src={prevSrc}></img>):
                            ("")
                            }
                        </p>
                    </div>
                    <p id="img-upload">
                        <label htmlFor="img">Upload Image:</label>
                        <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                    </p>
                </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>

    );
};

export default EditDailog;