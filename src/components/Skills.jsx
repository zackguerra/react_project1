import React, {Component, useState} from 'react'
import PropTypes from 'prop-types'

const Skills = () => {
    
    const WebList = ["HTML5", "Javascript", "CS3", "Phyton", "Java", "C#"];
    const BusinessList = ["10+ Years Professional experience", "Strategic Business Management MBA", "Business Administration BBA", "Project Manager", "Strategic and Financial Manager", "B.I. Specialist"];
    const DigitalDesign = ["Corel Draw", "Illustrator", "Photoshop"];
    const PersonalList = ["Portuguese(native)", "English(Advanced)", "Spanish (Basic)", "Excellent Team Worker"];
    const GameList = ["Unity Engine", "C#"];
    
    const [showWeb, setShowWeb] = useState(false);
    const [showBusiness, setShowBusiness] = useState(false);
    const [showDesign, setShowDesign] = useState(false);
    const [showPersonal, setShowPersonal] = useState(false);
    const [showGame, setShowGame] = useState(false);

    
    const webtoggle = () => {
    setShowWeb(!showWeb)
    }

    const businessToggle = () => {
        setShowBusiness(!showBusiness)
    }

    const designToggle = () => {
        setShowDesign(!showDesign)
    }

    const personalToggle = () => {
        setShowPersonal(!showPersonal)
    }

    const gameToggle = () => {
        setShowGame(!showGame)
    }
    
    return (
        <div>
            <h1>Skills</h1>
            <button className="SkillBtn" onClick={webtoggle}><h2>WEB DEVELOPMENT</h2></button>
            <ul>
                {showWeb && WebList.map((WebSkill, index) => (
                    <li key={index}>{WebSkill}</li>
                ))}
            </ul>
            <br />

            <button className="SkillBtn" onClick={businessToggle}><h2>BUSINESS</h2></button>
            <ul>
                {showBusiness && BusinessList.map((BusinessSkill, index) => (
                    <li key={index}>{BusinessSkill}</li>
                ))}
            </ul>
            <br />


            <button className="SkillBtn" onClick={designToggle}><h2>WEB DESIGN</h2></button>
            <ul>
                {showDesign && DigitalDesign.map((DesignSkill, index) => (
                    <li key={index}>{DesignSkill}</li>
                ))}
            </ul>
            <br />


            <button className="SkillBtn" onClick={personalToggle}><h2>PERSONAL</h2></button>
            <ul>
                {showPersonal && PersonalList.map((PersonalSkill, index) => (
                    <li key={index}>{PersonalSkill}</li>
                ))}
            </ul>
            <br />


            <button className="SkillBtn" onClick={gameToggle}><h2>GAME DEVELOPMENT</h2></button>
            <ul>
                {showGame && GameList.map((GameSkill, index) => (
                    <li key={index}>{GameSkill}</li>
                ))}
            </ul>






        </div>
    )    
}

export default Skills
