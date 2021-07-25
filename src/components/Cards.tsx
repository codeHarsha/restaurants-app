/** importing required components and files */

import React from 'react'
import './card.css' /** CSS File for styling */

/** cards components for creating cards of restaurants with name and timings */

function Cards({ name,timing,darkmode }:any) {
    return (
        <div className={darkmode ? "card-container-dark" : "card-container"}>
            <p className="name">{name}</p>
            <p className={darkmode ? "timing-dark" : "timing"}>{timing = timing.split("/").join(",")}</p>
        </div>
    )
}

/** exporting */

export default Cards
