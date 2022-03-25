import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <img src={props.poster} class="eventposter" alt="poster"/>
        <br />
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;
