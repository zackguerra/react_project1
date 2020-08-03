import React from "react";
import ReactDOM from "react-dom";
import Media from 'react-media';


import Header from "./components/Header";
import Webprojects from "./components/Webprojects"

import "../src/App.css";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <h1>React Assignment 106</h1>
      <div className="msg">URL: </div>
      <Webprojects /> */}

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

