import React from "react";

import aduana from "../img/aduana_logo.jpg";
import ourobranco from "../img/ourobranco_logo.jpg";
import cornerstone from "../img/cornerstone_logo.jpg";
import fgv from "../img/fgv_logo.jpg";
import laureate from "../img/laureate_logo.png";


const CertificatesAndExperience = () => {    
    return (
        <>
            <h1>Work And Study Experience</h1>
            <div class="row"> 
                <div class="column">
                    <figure><img src={aduana} />                    
                    <figcaption>Aduana: Foreign Trade Assistant 2006 – 2009</figcaption>
                    </figure>
                    <figure><img src={ourobranco}/>
                    <figcaption>Ouro Branco: General Manager 2009 – 2019</figcaption>
                    </figure>                    
                </div>
                <div class="column">
                <figure><img src={cornerstone} />                    
                    <figcaption>Cornerstone: Web and Mobile App Development.</figcaption>
                    </figure>
                    <figure><img src={fgv} />                    
                    <figcaption>FGV: MBA Strategic and Economic Business Management.</figcaption>
                    </figure>
                    <figure><img src={laureate} />                    
                    <figcaption>Laureate: Business Administration.</figcaption>
                    </figure>
                </div>  
            </div>
        </>
    )
}
export default CertificatesAndExperience;
