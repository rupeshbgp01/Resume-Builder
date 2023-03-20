import React, { useState } from "react";
import FrontPage from "./FrontPage";
import resumeSvg from "./images/resume2.svg";
import Button from "./Buttons/Button";
import './LandingPage.css';
// import { Link } from 'react-router-dom'
import Home from "./Home/Home";

function LandingPage() {



    return (
        <div className="header__container">
            <div className="background_pattern"></div>
            <div className="left">
                <p className="heading">
                    Unlock your  <span>potential</span> with a powerful <span>resume</span> that stands out from the crowd.
                </p>
                <div className="create_btn">
                    <Button title="Create New Resume" />
                  
                </div>
            </div>
            <div className="right">
                <img src={resumeSvg} alt="Resume" />
            </div>

        </div>
    );
}

export default LandingPage;