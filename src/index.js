import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Webprojects from "./components/Webprojects";
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import CertificatesAndExperience from "./components/CertificatesAndExperience"


import "./styles.css";
import GameDevProjects from "./components/GameDevProjects";

function App() {
  return (
    <div className="App">      
      <Header />
      <hr />      
      <Webprojects />
      <br />
      <hr />
      <br />
      <GameDevProjects />
      <br />
      <hr />
      <br />
      <Skills />
      <br />
      <hr />
      <br />
      <CertificatesAndExperience />
      <br />
      <hr />
      <br />
      <Contact />
    </div>    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
