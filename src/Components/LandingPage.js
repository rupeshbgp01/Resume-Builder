import React, { useState } from "react";

import resumeSvg from "./images/resume1.svg";

import './LandingPage.css';
// import { Link } from 'react-router-dom'
import Home from "./Home/Home";

function LandingPage() {

    const [isActive, setActive] = useState(false);

    function handleToggle() {
        setActive(!isActive);
    };

    return (
        <div className="header__container">
            <div className="landing_page">
                <div className="left">
                    <p className="heading">
                        Unlock your  <span>potential</span> with a powerful <span>resume</span> that stands out from the crowd.
                    </p>
                    <div className="create_btn">
                        <button className="btn" onClick={handleToggle} >Create New Resume</button>

                    </div>
                </div>
                <div className="right">
                    <img src={resumeSvg} alt="Resume" />
                </div>
            </div>

            <div className={`home ${isActive ? "home_active" : ""}`}>
                <Home />
            </div>

        </div>
    );
}

export default LandingPage;