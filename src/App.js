// import { Route, Routes } from "react-router-dom"
import React from "react";
import './App.css';
import LandingPage from './Components/LandingPage';
import Home from "./Components/Home/Home";
import Template from "./Components/Template";


function App() {
  return (
    <div className="main__container">
                 {/* <LandingPage />  */}
      <Home />
      {/* <Template/> */}
    </div>
  );
}

export default App;
