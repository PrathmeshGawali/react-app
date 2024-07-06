import React from "react";
import ReactDOM  from "react-dom";

export default function TwoButtons(){
    return(
        <div className="TwoButtons">
           <a className="book_licence " href = "Licence">
            <img className = "licence" src = "./images/licence.png" />
        <label>Licence Registration</label>
    </a>
    <a className ="session" href = "Session">
        <img className = "driving"  src = "./images/driving.png" />
        <label>Book a Session</label>
    </a>
        </div>
    )
}