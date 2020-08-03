import React from "react";

import logo1 from "../img/index-procaliber-lacrosse.png";
import logo2 from "../img/vancouver_cricket_club.png";


const Webprojects = () => {
    return (
        <>
        <h1 id="webdev">Portfolio</h1>
        <h3>This is my portfolio with the proposal of reunite all my professional experiences, academic projects and educational records using a clean design to provide the best experience for whom may see it.</h3>
        <br/>

        <h1>Web Dev. Projects</h1>

        <div className="webdev-wrap">
        <figure>
            <img className="web-logo" src={logo1} alt="web" />
            <figcaption>Website Created for the Professional Coach Tyler Pace from Pro Caliber Lacrosse, Vancouver, BC</figcaption>
        </figure>
        <figure>
            <img className="web-logo" src={logo2} alt="web" />
            <figcaption>Website Created for the Professional West Vancouver Cricket Club, Vancouver, BC</figcaption>
        </figure>
        </div>
        </>
    )
}
export default Webprojects;
