import "./../css/Slideshow.css";
import {useState } from "react";

const Slideshow = () => {
    const[slideIndex, setSlideindex] = useState(0);


    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    );

    const slideForward = () => {
       setSlideindex(slideIndex < images.length-1?slideIndex+1:0);
    }

    const slideBackward = () => {
       setSlideindex(slideIndex > 0?slideIndex-1:images.length -1);
    }

    return(
        <section id="slideshow">
            <img src={images[slideIndex]} />
            <a className="arrow" onClick={slideForward} id="right-arrow" href="#">&gt;</a>
            <a className="arrow" onClick={slideBackward} id="left-arrow" href="#">&lt;</a>
        </section>
    )
}

export default Slideshow;
    