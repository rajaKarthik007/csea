import React from "react";
import poster from "./Poster.png"

function Event(props){
    return (
            <div className="event">
            <div className="eventName">
                Lorem ipsum
            </div>
            <img src={poster} className="eventPoster"/>
            <div className="eventinfo">
            Donec pulvinar ante sit amet ipsum rhoncus, faucibus fringilla mauris porttitor. Morbi venenatis erat sit amet aliquam bibendum.
            </div>
            <button className="btn">Register</button>
            </div>
        
        
    );
}
export default Event;