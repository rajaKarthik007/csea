import React from "react";

export default function ImageCard(props)
{
    return (
        <div className={props.cls}>
            <h2>{props.Designation}</h2>
            <img className={props.iname} width="180px" height="180px" src={props.source} />
        </div>
    )
}