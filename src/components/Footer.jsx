import React from "react";
import logo from './logo.png';
import insta from './insta.png';
import twitter from './twitter.png';
import fb from './fb.png';

import Links from "./Links"
function MainEvent(){
    return (
            
        <div className="footer">
        <div className="bottomNav">
            <div className="navitem bot">
                <a href="/">Home<br /></a>
                <a href="/Team">Team<br /></a>
                <a href="/events">Events<br /></a>
                Resources<br />
                Gallery<br />
            </div>
            <div className="navitem bot">
                Home<br />
                Team<br />
                Events<br />
                Resources<br />
                Gallery<br />
            </div>
            
        </div>
             <div className="aslogo">
                <img src={logo} />
                <br />
                <div className="copyrights">
                copyright reserved @csea nitap 
                </div>
            </div>
            
             <div className="SNS">
                <img src={insta} className="handles"/>
                <img src={twitter} className="handles"/>
                <img src={fb} className="handles"/>
             </div>
            
             
             
        </div>
        
    );
}
export default MainEvent;