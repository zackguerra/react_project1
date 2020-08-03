import React from "react";

import game1 from "../img/game1.png";
import game2 from "../img/game2.png";
import game3 from "../img/game3.png";
import game4 from "../img/game4.png";


const Gamedevprojects = () => {    
    return (
        <> 

            <h1>Game Dev. Projects</h1>

            <div className="gamedev-wrap" id="gamedev">
            <figure>
                <img className="game-thumb" src={game1} alt="web" />
                <figcaption>Space Background and Spaceship Object</figcaption>
            </figure>
            <figure>
                <img className="game-thumb" src={game2} alt="web" />
                <figcaption>Enemy Spaceship Object</figcaption>
            </figure>                        
            </div>            
            <div className="gamedev-wrap">
                <figure>
                <img className="game-thumb" src={game3} alt="web" />
                <figcaption>Enemy randomly Spawning Feature</figcaption>
            </figure>
            <figure>
                <img className="game-thumb" src={game4} alt="web" />
                <figcaption>Single and Triple Shot Feature with Box Colision</figcaption>
            </figure>
            </div>

        </>
    )
}
export default Gamedevprojects;
