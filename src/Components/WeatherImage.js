import React from 'react';
import './WeatherImage.css';

import ForestFire from "../assets/forestFire.png";
import Drought from "../assets/drought.png";
import Tsunami from "../assets/tsunami.png";
import Pollution from "../assets/pollution.png";
import Snow from "../assets/snow.png";

const images = [{
        name: ForestFire,
        alt: "Forest Fire"
    },
    {
        name: Drought,
        alt: "Drought"
    },
    {
        name: Tsunami,
        alt: "Tsunami"
    },
    {
        name: Pollution,
        alt: "Pollution"
    },
    {
        name: Snow,
        alt: "Snow"
    }
];

const WeatherImage = () => {
    return(
        <div className="slider-frame">
            <div className="slide-images">
                     {images.map((image) => {
                       return(
                           <div className="img-container">
                               <img src={image.name} alt={image.alt}/>
                           </div>
                       );
                     })}
            </div>
        </div>
    );
};

export default WeatherImage;