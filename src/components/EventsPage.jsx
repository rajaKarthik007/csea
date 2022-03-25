import React, { useState } from "react";
import Past from "./Past";
import Upcoming from "./Upcoming";

function EventsPage() {

  const [active , setActive] = useState("past");
  return (
    <div className="App">
      
      <div>
      {active === "past" && <Past fun={setActive}/>}
      {active === "upcoming" && <Upcoming fun={setActive}/>}
      </div>
    </div>
  );
}

export default EventsPage;