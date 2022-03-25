import React from "react";
import Event from "./Event"
function Events(props){
    return (
        <div className="EVENTs">
            <div class="eventstype" style={{color: props.color}}>
                {props.ID}
            </div>
            <div className="eventslist">
                <Event />
                <Event />
                <Event />
            </div>
        </div>
    );
}
export default Events;