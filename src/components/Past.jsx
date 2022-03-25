import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Card_past from "./Card_past";

function Past(props)
{
    return(
        <div className="past_events">
        <nav>
        <button className = "btn1" onClick={() => props.fun("past")}>Past Events</button>
        <button className = "btn2" onClick={() => props.fun("upcoming")}>Up-Coming Events</button>
      </nav>
            <Card_past />
        </div>
    );
}

export default Past;