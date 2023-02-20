import React from "react";

import heart from './icons/heart.svg'
import play from './icons/play.svg'
import dots from './icons/dots.svg'

export const AllIcons = () => {
    return (
        <div className="iconsContainer">
            <img className="heartIcon" src={heart} alt="heart icon" />
            <img className="playIcon" src={play} alt="play icon" />
            <img className="dotsIcon" src={dots} alt="dots icon" />
        </div>
    );
};
