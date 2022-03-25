import React from "react";
import Card_upcoming from "./Card_upcoming";

function Upcoming(props)
{
    return(
        <div className="upcoming_events">
        <nav>
        <button className = "btn1" onClick={() => props.fun("past")}>Past Events</button>
        <button className = "btn2" onClick={() => props.fun("upcoming")}>Up-Coming Events</button>
      </nav>
            <Card_upcoming />
        </div>
    );
}

export default Upcoming;