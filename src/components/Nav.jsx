import React from "react";
import logo from './logo.png';

function Nav(){
    return (
        <div>
            <img src={logo} className="logo" />
            <div className="Navitems">
                <a href="/"><span className="navitem">Home</span></a>
                <a href="/events"><span className="navitem">Events</span></a>
                <span className="navitem">Gallery</span>
                <a href="/Team"><span className="navitem">Team</span></a>
                <span className="navitem">Alumni</span>
                <span className="navitem">Contact Us</span>
            </div>
        </div>
    );
}

export default Nav;